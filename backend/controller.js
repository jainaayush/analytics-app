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
  let uniqueTypes = [];
  let itemTypeCount = [];
  let itemType = [];
  const allTypes = data.map((row) => row.Type);
  console.log(allTypes);
  for (index in allTypes) {
    if (!uniqueTypes.includes(allTypes[index])) {
      uniqueTypes.push(allTypes[index]);
    }
  }
  for (index in uniqueTypes) {
    let count = data.filter((row) => row.Type === uniqueTypes[index]).length;
    itemTypeCount.push(count);
  }
  for (index in itemTypeCount) {
    itemType.push({ name: uniqueTypes[index], count: itemTypeCount[index] });
  }
  console.log(itemType);
  if (itemType) {
    return res.send({
      statusCode: 200,
      data: itemType,
    });
  } else {
    return res.send({
      statusCode: 201,
      message: "Internal error",
    });
  }
};

const retailerFullProduct = (req, res) => {
  let uniqueItems = [];
  let itemCount = [];
  let item = [];
  const locationFilter = data.filter((row) => row.location === "Retailer");
  const volumeFilter = locationFilter.filter((row) => row.volume > 90);
  const allItems = volumeFilter.map((row) => row.Product);
  for (index in allItems) {
    if (!uniqueItems.includes(allItems[index])) {
      uniqueItems.push(allItems[index]);
    }
  }
  for (index in uniqueItems) {
    let count = volumeFilter.filter(
      (row) => row.Product === uniqueItems[index]
    ).length;
    itemCount.push(count);
  }
  for (index in itemCount) {
    item.push({ label: uniqueItems[index], value: Math.round((itemCount[index]/volumeFilter.length)*100) });
  }
  console.log("getchart", item)
  if (item) {
    return res.send({
      statusCode: 200,
      data: item,
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
