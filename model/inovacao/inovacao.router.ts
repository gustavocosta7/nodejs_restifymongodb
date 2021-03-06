import {ModelRouter} from "../../common/model-router";
import * as restify from 'restify'
import { Inovacao } from "./inovacao.model";

class InovacaoRouter extends ModelRouter<Inovacao>{

    constructor(){
        super(Inovacao)
        // this.on('beforeRender', document =>{
        //     document.password = undefined;
        // })
    }


    findByMatricula = (req, resp, next)=>{
        if(req.query.matricula){
            Inovacao.find({autor_matricula: req.query.matricula})
                .then(this.renderAll(resp, next))
                .catch(next);
        }else{
            next();
        }
    }



    applyRoutes(app: restify.Server) {
        /**
         * Get all innovations
         */
        app.get('/inovacao',this.findAll);
        // app.get('/inovacao/:matricula',[this.findByMatricula, this.findAll]);'
        app.get('/inovacao/:matricula',[this.findByMat, this.findAll]);
        /**
         * Get a specify innovation
         */
        // app.get('/inovacao/:id',this.findById);


        /**
         * Insert new document in db
         */
        app.post('/inovacao', this.save )
    }

}
export const inovacoesRouter = new InovacaoRouter();