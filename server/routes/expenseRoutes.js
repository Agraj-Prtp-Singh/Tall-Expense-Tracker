const express = require("express");
const router = express.Router();

const {
  createExpense,
  getExpenses,
  updateExpenses,
  deleteExpenses,
} = require("../controllers/expenseController");

router.post("/", createExpense);
router.get("/", getExpenses);
router.put("/:id", updateExpenses);
router.delete("/:id", deleteExpenses);
module.exports = router;
