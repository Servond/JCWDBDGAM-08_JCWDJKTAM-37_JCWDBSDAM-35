import express from "express";
import expenseRouter from "./routers/expense.router";

const PORT = 8080;

const app = express();
app.use(express.json());

// http:localhost:8080/api

app.use("/expenses", expenseRouter); // http:localhost:8080/expenses

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
