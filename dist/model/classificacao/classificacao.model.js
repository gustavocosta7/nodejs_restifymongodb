"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const classificacaoSchema = new mongoose.Schema({
    tipo_classificacao: {
        type: String,
        required: true
    },
    resposta: {
        type: String,
        required: true
    }
});
exports.Classificacao = mongoose.model('Classificacao', classificacaoSchema);
