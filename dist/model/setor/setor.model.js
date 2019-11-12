"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const setorSchema = new mongoose.Schema({
    descricao_setor: {
        type: String,
        required: true
    },
    tipo_setor: {
        type: String,
    }
});
exports.Setor = mongoose.model('Setor', setorSchema);
