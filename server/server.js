require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// Middleware

app.use(express.json());

// Routes
app.use("/api/expenses", expenseRoutes);
const PORT = process.env.PORT || 5000;

// MongoDB connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}🚀.`);
    });
  })

  .catch((err) => {
    console.error("MongoDB connection Failed.");
    console.error(err);
  });
