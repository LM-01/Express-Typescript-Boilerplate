"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/endpoint', (req, res) => {
    res.json({ message: 'This is an endpoint!' });
});
exports.default = router;
