"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const json_1 = require("./utils/json");
const PORT = 8080;
const app = (0, express_1.default)();
app.get("/api", (req, res) => {
    const data = (0, json_1.readJson)();
    res.json({
        message: "OK",
        data,
    });
});
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
