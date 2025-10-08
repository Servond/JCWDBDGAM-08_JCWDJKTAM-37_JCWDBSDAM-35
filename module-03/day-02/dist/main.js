"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expense_router_1 = __importDefault(require("./routers/expense.router"));
const PORT = 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
// http:localhost:8080/api
app.use("/expenses", expense_router_1.default); // http:localhost:8080/expenses
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
