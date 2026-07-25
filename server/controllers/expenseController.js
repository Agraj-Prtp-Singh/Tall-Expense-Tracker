const Expense = require("../models/Expense");

// Create Expense
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
      user: req.user.id,
    });

    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Expenses

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      user: req.user.id,
    }).sort({ date: -1 });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Expense
const updateExpenses = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    // Check ownership
    if (expense.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to update this expense.",
      });
    }

    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Expense

const deleteExpenses = async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found",
      });
    }

    // Check ownership
    if (expense.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You are not authorized to delete this expense.",
      });
    }

    await expense.deleteOne();

    res.status(200).json({
      message: "Expense deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createExpense,
  getExpenses,
  updateExpenses,
  deleteExpenses,
};
