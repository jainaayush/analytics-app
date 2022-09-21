const readData = require("./service");

const data = readData();

function getInventory(req, res) {
    if (data) {
      return res.send({
        statusCode: 200,
        message: data,
      });
    } else {
      return res.send({
        statusCode: 201,
        message: "Internal Error",
      });
    }
}

function kegTrackerIds(req,res) {
  const Ids = data.map((row) => row.kegtrackerId);
    if (Ids) {
      return res.send({
        statusCode: 200,
        data: Ids,
      });
    } else {
      return res.send({
        statusCode: 201,
        message: "Internal Error",
      });
    }
}

const kegTrackerDetails = (req, res) => {
  const product = data.find((row) => row.kegtrackerId === req.params.id);
  if (product) {
    return res.send({
      statusCode: 200,
      data: product,
    });
  } else {
    return res.send({
      statusCode: 201,
      message: "Unexpected Error",
    });
  }
};

const getInventoryTypes = (req, res) => {
  let distinctTypes = [];
  let typeCount = [];
  let type = [];
  const allTypes = data.map((row) => row.Type);
  console.log(allTypes);
  for (index in allTypes) {
    if (!distinctTypes.includes(allTypes[index])) {
      distinctTypes.push(allTypes[index]);
    }
  }
  for (index in distinctTypes) {
    let count = data.filter((row) => row.Type === distinctTypes[index]).length;
    typeCount.push(count);
  }
  for (index in typeCount) {
    type.push({ name: distinctTypes[index], count: typeCount[index] });
  }
  console.log(type);
  if (type) {
    return res.send({
      statusCode: 200,
      data: type,
    });
  } else {
    return res.send({
      statusCode: 201,
      message: "Internal error",
    });
  }
};

const retailerFullProduct = (req, res) => {
  let distinctProducts = [];
  let productCount = [];
  let product = [];
  const locationFiltered = data.filter((row) => row.location === "Retailer");
  const volumeFiltered = locationFiltered.filter((row) => row.volume > 90);
  const allProducts = volumeFiltered.map((row) => row.Product);
  for (index in allProducts) {
    if (!distinctProducts.includes(allProducts[index])) {
      distinctProducts.push(allProducts[index]);
    }
  }
  for (index in distinctProducts) {
    let count = volumeFiltered.filter(
      (row) => row.Product === distinctProducts[index]
    ).length;
    productCount.push(count);
  }
  for (index in productCount) {
    product.push({ label: distinctProducts[index], value: Math.round((productCount[index]/volumeFiltered.length)*100) });
  }
  console.log("getchart", product)
  if (product) {
    return res.send({
      statusCode: 200,
      data: product,
    });
  } else {
    return res.send({
      statusCode: 201,
      message: "Internal error",
    });
  }
};
module.exports = {
  getInventory,
  kegTrackerIds,
  kegTrackerDetails,
  getInventoryTypes,
  retailerFullProduct,
};
