import * as mongoose from 'mongoose'

export interface Reuniao extends mongoose.Document {
    dt_reuniao: Date,
    descricao_reuniao: string
}

const reuniaoSchema = new mongoose.Schema({
    dt_reuniao: {
        type: Date,
        required: true
    },
    descricao_reuniao: {
        type: String,
        required: true
    }
});

export const Reuniao = mongoose.model<Reuniao>('Reuniao', reuniaoSchema);
