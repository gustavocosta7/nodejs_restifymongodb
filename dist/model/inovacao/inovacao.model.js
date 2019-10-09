"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const inovacaoSchema = new mongoose.Schema({
    matricula: {
        type: String
    },
    numero: {
        type: String
    },
    dt_criacao: {
        type: Date,
        default: Date.now()
    },
    dt_avaliacao: {
        type: Date
    },
    perspectiva: {
        type: String
    },
    descricao: {
        type: String
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
        type: String
    },
    status: {
        type: String
    }
});
exports.Inovacao = mongoose.model('Innovation', inovacaoSchema);
