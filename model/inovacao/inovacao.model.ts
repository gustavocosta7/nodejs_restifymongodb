import * as mongoose from 'mongoose'

export interface Inovacao extends mongoose.Document {
    matricula: string,
    numero: string,
    dt_criacao: Date,
    dt_avaliacao: Date,
    perspectiva: string,
    descricao: string,
    comentario: string,
    classificacao: string,
    dt_prazo: string,
    situacao_atual: string,
    link_anexo: string,
    status: string
}

const inovacaoSchema = new mongoose.Schema({
    matricula : {
        type: String
    },
    numero : {
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
})

export const Inovacao = mongoose.model<Inovacao>('Innovation', inovacaoSchema)