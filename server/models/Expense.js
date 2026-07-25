const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
    trim: true,
  },

  paymentMethod: {
    type: String,
    required: true,
    trim: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },

  note: {
    type: String,
    default: "",
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
