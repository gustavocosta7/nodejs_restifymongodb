"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const avaliadorSchema = new mongoose.Schema({
    descricao_avaliador: {
        type: String,
        required: true
    }
});
exports.Avaliador = mongoose.model('Avaliador', avaliadorSchema);
