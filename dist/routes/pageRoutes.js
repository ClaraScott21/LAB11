"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.render("home");
});
router.get("/login", (req, res) => {
    const err = req.query.err;
    res.render("login", { err });
});
router.get("/profile", auth_1.requireAuth, (req, res) => {
    res.render("profile", {
        user: req.user
    });
});
exports.default = router;
