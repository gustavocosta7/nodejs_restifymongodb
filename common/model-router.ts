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

}