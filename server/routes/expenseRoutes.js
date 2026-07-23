const express = require("express");
const router = express.Router();

const {
  createExpense,
  getExpenses,
  updateExpenses,
} = require("../controllers/expenseController");

router.post("/", createExpense);
router.get("/", getExpenses);
router.put("/:id", updateExpenses);
module.exports = router;
