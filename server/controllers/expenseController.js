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

// Put Method

const updateExpenses = async (req, res) => {
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!updatedExpense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Method

const deleteExpenses = async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);

    if (!deletedExpense) {
      return res.status(404).json({
        message: "Expense Not Found",
      });
    }
    res.status(200).json({
      message: "Expense deleted successfully",
      deletedExpense,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
module.exports = { createExpense, getExpenses, updateExpenses, deleteExpenses };
