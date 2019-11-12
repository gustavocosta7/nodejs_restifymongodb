"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const reuniaoSchema = new mongoose.Schema({
    dt_reuniao: {
        type: Date,
        required: true
    },
    descricao_reuniao: {
        type: String,
        required: true
    }
});
exports.Reuniao = mongoose.model('Reuniao', reuniaoSchema);
