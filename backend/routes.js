const express = require("express");
const router = express.Router();
const {
  kegTrackerIds,
  getInventory,
  kegTrackerDetails,
  getInventoryTypes,
  retailerFullProduct,
} = require("./controller");

router.get("/getInventory", getInventory);
router.get("/kegTrackerIds", kegTrackerIds);
router.get("/kegTrackerDetails/:id", kegTrackerDetails);
router.get("/getInventoryTypes", getInventoryTypes);
router.get("/retailerFullProduct", retailerFullProduct);

module.exports = router;
