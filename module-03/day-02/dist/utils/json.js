"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJson = readJson;
exports.writeJson = writeJson;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const targetPath = path_1.default.join(process.cwd(), "data", "expenses.json");
function readJson() {
    try {
        const data = fs_1.default.readFileSync(targetPath, "utf-8");
        return JSON.parse(data);
    }
    catch (error) {
        console.error(`Failed to read JSON file at ${targetPath}:`, error);
        throw error;
    }
}
function writeJson(data) {
    try {
        const jsonString = JSON.stringify(data, null, 2);
        fs_1.default.writeFileSync(targetPath, jsonString, "utf-8");
    }
    catch (error) {
        console.error(`Failed to write JSON file at ${targetPath}:`, error);
        throw error;
    }
}
