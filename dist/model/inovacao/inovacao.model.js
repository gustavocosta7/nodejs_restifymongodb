"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
let number;
const inovacaoSchema = new mongoose.Schema({
    autor_matricula: {
        type: String,
        required: true
    },
    descricao_inovacao: {
        type: String,
        required: true
    },
    anexo: [],
    setor_autor: {
        type: String,
        required: true
    },
    dt_criacao: {
        type: Date,
        required: true,
        default: Date.now()
    },
    num_inovacao: {
        type: Number
    },
    identificador: {
        type: String
    }
});
//
// inovacaoSchema.statics.countInDocuments = function(){
//     return this.Inovacao.countDocuments();
// }
exports.Inovacao = mongoose.model('Inovacao', inovacaoSchema);
//
// number = async function ds(){
//     const number =  await Inovacao.countDocuments();
//     return number
// }
