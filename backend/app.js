const express = require("express");
const app = express();
const cors = require("cors");
const item = require("./routes");
const port = 8001;

try {
  app.use(cors());
  app.use("/item", item);
  app.listen(port, () => console.log(`Listening at port ${port}...`));
} catch (err) {
  console.log("Unexpected Error: ", err.message);
}
