import {ModelRouter} from "../../common/model-router";
import * as restify from 'restify'
import { Classificacao } from "./classificacao.model";

class ClassificacaoRouter extends ModelRouter<Classificacao>{

    constructor(){
        super(Classificacao)
        // this.on('beforeRender', document =>{
        //     document.password = undefined;
        // })
    }

    findByMatricula = (req, resp, next)=>{
        if(req.query.matricula){
            Classificacao.find({matricula: req.query.matricula})
                .then(this.renderAll(resp, next))
                .catch(next)
        }else{
            next()
        }
    }

    applyRoutes(app: restify.Server) {
        /**
         * Get all innovations
         */
        app.get('/classificacao',[this.findByMatricula, this.findAll]);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/classificacao/:id',this.findById);
        /**
         * Insert new document in db
         */
        app.post('/classificacao', this.save )
    }

}
export const classificacaoRouter = new ClassificacaoRouter();