"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const json_1 = require("../utils/json");
const router = (0, express_1.Router)();
// http:localhost:8080/expenses
// GET http:localhost:8080/expenses?type=Expense&category=Food&title=t
router.get("/", (req, res) => {
    try {
        const { type, category, title } = req.query;
        console.log(type, category, title);
        const data = (0, json_1.readJson)();
        let filteredExpense = data.expense;
        // 1. type filter
        if (type)
            filteredExpense = filteredExpense.filter((i) => i.type.toLowerCase() === type.toLowerCase());
        // 2. category filter
        if (category)
            filteredExpense = filteredExpense.filter((i) => i.category.toLowerCase() === category.toLowerCase());
        //3. title filter
        if (title)
            filteredExpense = filteredExpense.filter((i) => i.title.toLowerCase().includes(title.toLowerCase()));
        res.json({
            message: "OK",
            data: filteredExpense,
        });
    }
    catch (err) {
        res.status(400).json({
            message: "NG",
            error: err.message,
        });
    }
});
// GET http:localhost:8080/expenses/total
router.get("/total", (req, res) => {
    try {
        // ambil dari url request ?category=transport&dateFrom=2025-01-01&dateTo=2025-10-16
        const { dateFrom, dateTo, category } = req.query;
        const data = (0, json_1.readJson)();
        let filteredExpenses = data.expense;
        // jika dateFrom dan dateTo tidak kosong
        if (dateFrom && dateTo) {
            // ambil millisecond
            const from = new Date(dateFrom).getTime();
            const to = new Date(dateTo).getTime();
            // filter data expenses yang dimana tanggalnya diantara dateFrom dan dateTo query
            filteredExpenses = filteredExpenses.filter((i) => {
                const expenseDate = new Date(i.date).getTime();
                return expenseDate >= from && expenseDate <= to;
            });
        }
        // jika category tidak kosong
        if (category) {
            // filter data expenses yang dimana category sesuai dengan category query
            filteredExpenses = filteredExpenses.filter((i) => i.category.toLowerCase() === category.toLowerCase());
        }
        // hitung total semua nominal dari array expenses
        // 1. total income
        const total_income = filteredExpenses
            .filter((i) => i.type === "Income")
            .reduce((sum, expense) => sum + expense.nominal, 0);
        // 2. total expense
        const total_expense = filteredExpenses
            .filter((i) => i.type === "Expense")
            .reduce((sum, expense) => sum + expense.nominal, 0);
        // 3. total balance (income - expense)
        const balance = total_income - total_expense;
        res.json({
            message: "OK",
            data: {
                total_income: total_income,
                total_expense: total_expense,
                balance: balance,
            },
        });
    }
    catch (err) {
        res.status(400).json({
            message: "NG",
            error: err.message,
        });
    }
});
// GET http://localhost:8080/expenses/1
router.get("/:expenseId", (req, res) => {
    try {
        const { expenseId } = req.params;
        const data = (0, json_1.readJson)().expense.filter((i) => i.id === Number(expenseId))[0];
        res.json({
            message: "OK",
            data,
        });
    }
    catch (err) {
        res.status(400).json({
            message: "NG",
            error: err.message,
        });
    }
});
// POST http://localhost:8080/expenses
router.post("/", (req, res) => {
    var _a;
    try {
        const { title, type, category, date, nominal } = req.body;
        const data = (0, json_1.readJson)();
        data.expense.push({
            id: (((_a = data.expense[data.expense.length - 1]) === null || _a === void 0 ? void 0 : _a.id) || 0) + 1,
            title,
            type,
            category,
            nominal: nominal,
            date: new Date(date).toISOString(),
        });
        (0, json_1.writeJson)(data);
        res.json({
            message: "OK",
        });
    }
    catch (err) {
        res.status(400).json({
            message: "NG",
            error: err.message,
        });
    }
});
// PATCH http://localhost:8080/expenses/1
router.patch("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { title, type, category, date, nominal } = req.body;
        const data = (0, json_1.readJson)();
        const expenseIndex = data.expense.findIndex((i) => i.id === Number(id));
        if (expenseIndex === -1)
            throw new Error("Expense not found");
        if (title !== undefined)
            data.expense[expenseIndex].title = title;
        if (type !== undefined)
            data.expense[expenseIndex].type = type;
        if (category !== undefined)
            data.expense[expenseIndex].category = category;
        if (nominal !== undefined)
            data.expense[expenseIndex].nominal = nominal;
        if (date !== undefined)
            data.expense[expenseIndex].date = new Date(date).toISOString();
        (0, json_1.writeJson)(data);
        res.json({
            message: "OK",
        });
    }
    catch (err) {
        res.status(400).json({
            message: "NG",
            error: err.message,
        });
    }
});
// DELETE http://localhost:8080/expenses/2
router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        const data = (0, json_1.readJson)();
        const expenseIndex = data.expense.findIndex((i) => i.id === Number(id));
        if (expenseIndex === -1)
            throw new Error("Expense not found");
        data.expense.splice(expenseIndex, 1)[0];
        (0, json_1.writeJson)(data);
        res.json({
            message: "OK",
        });
    }
    catch (err) {
        res.status(400).json({
            message: "NG",
            error: err.message,
        });
    }
});
exports.default = router;
