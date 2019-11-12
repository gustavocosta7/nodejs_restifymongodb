import * as mongoose from 'mongoose'

export interface Setor extends mongoose.Document {
    descricao_setor: string,
    tipo_setor: string
}

const setorSchema = new mongoose.Schema({
    descricao_setor : {
        type: String,
        required: true
    },
    tipo_setor : {
        type: String,
    }
});

export const Setor = mongoose.model<Setor>('Setor', setorSchema);
