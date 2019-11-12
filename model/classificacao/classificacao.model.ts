import * as mongoose from 'mongoose'

export interface Classificacao extends mongoose.Document {
    tipo_classificacao: string,
    resposta: string
}

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

export const Classificacao = mongoose.model<Classificacao>('Classificacao', classificacaoSchema);
