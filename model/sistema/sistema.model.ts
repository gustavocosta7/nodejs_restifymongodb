import * as mongoose from 'mongoose'

export interface Sistema extends mongoose.Document {
    descricao: string
}

const sistemaSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true
    }
});

export const Sistema = mongoose.model<Sistema>('Sistema', sistemaSchema);
