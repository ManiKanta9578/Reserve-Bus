const express = require("express");
const { saveReceiptData, getReceiptData } = require("../controllers/receiptController");
const router = express.Router();

// POST route to save receipt data
router.post("/", saveReceiptData);

// GET route to retrieve receipt data
router.get("/", getReceiptData);


module.exports = router;
