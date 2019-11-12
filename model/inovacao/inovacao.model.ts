import * as mongoose from 'mongoose'
import validate = WebAssembly.validate;

export interface Inovacao extends mongoose.Document {
    autor_matricula: string,
    descricao_inovacao: string,
    anexo: [string],
    setor_autor: string,
    dt_criacao: Date,
    num_inovacao: number,
    identificador: string
}
let number;

const inovacaoSchema = new mongoose.Schema(

    {
    autor_matricula : {
        type: String,
        required: true
    },
    descricao_inovacao : {
        type: String,
        required: true
    },
    anexo:[
        
    ],
    setor_autor : {
        type: String,
        required: true
    },
    dt_criacao : {
        type: Date,
        required: true,
        default: Date.now()
    },
    num_inovacao : {
        type: Number
    },
    identificador : {
        type: String
    }
});
//
// inovacaoSchema.statics.countInDocuments = function(){
//     return this.Inovacao.countDocuments();
// }

export const Inovacao = mongoose.model<Inovacao>('Inovacao', inovacaoSchema);
//
// number = async function ds(){
//     const number =  await Inovacao.countDocuments();
//     return number
// }