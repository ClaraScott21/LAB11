"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const db_1 = require("./db");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const pageRoutes_1 = __importDefault(require("./routes/pageRoutes"));
const app = (0, express_1.default)();
app.set("trust proxy", 1);
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(authRoutes_1.default);
app.use(pageRoutes_1.default);
const PORT = Number(process.env.PORT || 3000);
async function main() {
    await (0, db_1.connectDB)(process.env.MONGODB_URI);
    app.listen(PORT, () => {
        console.log(`✅ http://localhost:${PORT}`);
    });
}
main().catch((err) => {
    console.error("❌ Startup error:", err);
    process.exit(1);
});
