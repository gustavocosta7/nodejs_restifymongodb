"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reuniao_model_1 = require("./reuniao/reuniao.model");
const sistema_model_1 = require("./sistema/sistema.model");
const inovacao_model_1 = require("./inovacao/inovacao.model");
const classificacao_model_1 = require("./classificacao/classificacao.model");
class AgregadorRotas {
    constructor() {
    }
    Reuniao() {
        return new reuniao_model_1.Reuniao();
    }
    Sistema() {
        return new sistema_model_1.Sistema();
    }
    Inovacao() {
        return new inovacao_model_1.Inovacao();
    }
    Classificacao() {
        return new classificacao_model_1.Classificacao();
    }
}
exports.agregadorRotas = new AgregadorRotas();
