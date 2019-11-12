"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const sistemaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    }
});
exports.Sistema = mongoose.model('Sistema', sistemaSchema);
