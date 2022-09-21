const express = require("express");
const app = express();
const item = require("./routes");
const port = 8001;
const cors = require("cors");

try {
  app.use(cors());
  app.use("/item", item);
  app.get("/", (req, res) => {
    res.send({
      statusCode: 200,
      message: "Welcome to Backend",
    });
  });
  app.listen(port, () => console.log(`Listening at port ${port}..`));
} catch (err) {
  console.log("Error occoured", err.message);
}
