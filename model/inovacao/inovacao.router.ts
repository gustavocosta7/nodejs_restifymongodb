import {Router} from "../../common/router";
import * as restify from 'restify'
import { Inovacao } from "./inovacao.model";

class InovacaoRouter extends Router{
    applyRoutes(app: restify.Server) {
        app.get('/',(req, res, next) => {
            res.json({message: "hello"})
        })
        /**
         * Get all innovations
         */
        app.get('/inovacao',(req, res, next) => {
            Inovacao.find().then(inovacoes => {
                res.json(inovacoes);
            })
        })
        /**
         * Get a specify innovation
         */
        app.get('/inovacao/:id',(req, res, next) => {
            Inovacao.findById(req.params.id).then(inovacao => {
                if (inovacao) {
                    res.json(inovacao)
                    return next();
                }

                res.send(404)
                return next();
            })
        })
        /**
         * Insert new document in db
         */
        app.post('/inovacao', (req, res, next) => {
            let inovacao = new Inovacao(req.body);
            inovacao.save().then(inovacao=>{
                res.json(inovacao)
                return next();
            });
        })
    }

}
export const inovacoesRouter = new InovacaoRouter();