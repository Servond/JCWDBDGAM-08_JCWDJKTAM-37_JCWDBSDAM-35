import fs from "fs";
import path from "path";

const targetPath = path.join(process.cwd(), "data", "expenses.json");

export function readJson<T = any>(): T {
  try {
    const data = fs.readFileSync(targetPath, "utf-8");
    return JSON.parse(data) as T;
  } catch (error) {
    console.error(`Failed to read JSON file at ${targetPath}:`, error);
    throw error;
  }
}

export function writeJson<T = any>(data: T): void {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(targetPath, jsonString, "utf-8");
  } catch (error) {
    console.error(`Failed to write JSON file at ${targetPath}:`, error);
    throw error;
  }
}
