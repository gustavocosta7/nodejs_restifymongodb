"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const avaliacaoSchema = new mongoose.Schema({
    id_inovacao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inovacao'
    },
    id_classificacao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classificacao'
    },
    id_sistema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sistema'
    },
    id_setor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Setor'
    },
    id_reuniao: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reuniao'
    },
    id_avaliador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avaliador'
    },
    comentario_comite: {
        type: String
    },
    dt_conclusao: {
        type: Date
    },
    status: {
        type: String
    }
});
exports.Avaliacao = mongoose.model('Avaliacao', avaliacaoSchema);
