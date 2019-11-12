import * as mongoose from 'mongoose'

export interface Avaliador extends mongoose.Document {
    descricao_avaliador: string,
}

const avaliadorSchema = new mongoose.Schema({
    descricao_avaliador : {
        type: String,
        required: true
    }
});

export const Avaliador = mongoose.model<Avaliador>('Avaliador', avaliadorSchema);
