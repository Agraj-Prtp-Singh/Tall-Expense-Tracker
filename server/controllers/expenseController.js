const Expense = require("../models/Expense");

// POST Method
const createExpense = async (req, res) => {
  try {
    const { title, amount, category, paymentMethod, date, note } = req.body;

    const expense = await Expense.create({
      title,
      amount,
      category,
      paymentMethod,
      date,
      note,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Method
const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find().sort({ date: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createExpense, getExpenses };
