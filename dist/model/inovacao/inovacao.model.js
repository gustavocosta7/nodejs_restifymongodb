"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const inovacaoSchema = new mongoose.Schema({
    matricula: {
        type: String,
        required: true
    },
    numero: {
        type: String
    },
    dt_criacao: {
        type: Date,
        required: true,
        default: Date.now()
    },
    dt_avaliacao: {
        type: Date
    },
    perspectiva: {
        type: String
    },
    descricao: {
        type: String,
        required: true
    },
    comentario: {
        type: String
    },
    classificacao: {
        type: String
    },
    dt_prazo: {
        type: String
    },
    situacao_atual: {
        type: String
    },
    link_anexo: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    }
});
exports.Inovacao = mongoose.model('Innovation', inovacaoSchema);
