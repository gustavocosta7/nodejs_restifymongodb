import {Router} from "./router";
import * as mongoose from 'mongoose';
import {Inovacao} from "../model/inovacao/inovacao.model";

export abstract class ModelRouter<D extends mongoose.Document> extends Router{
    constructor(protected model: mongoose.Model<D>){
        super()
    }
    findAll = (req, res, next) => {
        this.model.find().then(this.renderAll(res,next))
            .catch(next);
    }

    findById = (req, res, next) => {
        this.model.findById(req.params.id).then(this.render(res,next))
            .catch(next);
    }

    save = (req, res, next) => {
        let document = new this.model(req.body);
        document.save().then(this.render(res,next))
            .catch(next);
    }

    // saveNumber = async (req, res, next) => {
    //     req.body['num_inovacao'] = await this.model.countDocuments() + "/" + new Date().getFullYear()
    //     let document = new this.model(req.body);
    //     document.save().then(this.render(res,next))
    //         .catch(next);
    // }

    findByMat = async (req, res, next) => {
        const usuarios = await this.model.find({autor_matricula: req.query.matricula})
        // console.log(usuarios)
        const data = new Date(usuarios[0]['dt_criacao'])
        // this.model.deleteMany({'$expr':{'$eq' : [{'$year' : '$dt_criacao'}, 2019]}})
        // console.log(data.getFullYear())
        const byData = await this.model.findOne({'$expr':{'$eq' : [{'$year' : '$dt_criacao'}, 2019]}}).sort({'num_inovacao': -1})

        console.log(byData['num_inovacao'])


        this.model.find({autor_matricula : req.query.matricula}).then(this.render(res,next))
            .catch(next);
    }
}