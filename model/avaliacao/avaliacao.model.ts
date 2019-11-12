import * as mongoose from 'mongoose'
import {Inovacao} from "../inovacao/inovacao.model";
import {Classificacao} from "../classificacao/classificacao.model";
import {Sistema} from "../sistema/sistema.model";
import {Setor} from "../setor/setor.model";
import {Reuniao} from "../reuniao/reuniao.model";
import {Avaliador} from "../avaliador/avaliador.model";

export interface Avaliacao extends mongoose.Document {
    id_inovacao: mongoose.Schema.Types.ObjectId | Inovacao,
    id_classificacao: mongoose.Schema.Types.ObjectId | Classificacao,
    id_sistema: mongoose.Schema.Types.ObjectId | Sistema,
    id_setor: mongoose.Schema.Types.ObjectId | Setor,
    id_reuniao: mongoose.Schema.Types.ObjectId | Reuniao,
    id_avaliador: mongoose.Schema.Types.ObjectId | Avaliador,
    comentario_comite: string,
    dt_conclusao: Date,
    status: string
}

const avaliacaoSchema = new mongoose.Schema({
    id_inovacao : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Inovacao'
    },
    id_classificacao : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classificacao'
    },
    id_sistema : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sistema'
    },
    id_setor : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Setor'
    },
    id_reuniao : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reuniao'
    },
    id_avaliador : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avaliador'
    },
    comentario_comite : {
        type: String
    },
    dt_conclusao : {
        type: Date
    },
    status : {
        type: String
    }
});

export const Avaliacao = mongoose.model<Avaliacao>('Avaliacao', avaliacaoSchema);
