import {ModelRouter} from "../../common/model-router";
import * as restify from 'restify'
import {Avaliador} from "./avaliador.model";

class AvaliadorRouter extends ModelRouter<Avaliador>{

    constructor(){
        super(Avaliador)
        // this.on('beforeRender', document =>{
        //     document.password = undefined;
        // })
    }

    // findByMatricula = (req, resp, next)=>{
    //     if(req.query.matricula){
    //         Inovacao.find({matricula: req.query.matricula})
    //             .then(this.renderAll(resp, next))
    //             .catch(next)
    //     }else{
    //         next()
    //     }
    // }

    applyRoutes(app: restify.Server) {
        /**
         * Get all innovations
         */
        app.get('/avaliador',this.findAll);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/avaliador/:id',this.findById);
        /**
         * Insert new document in db
         */
        app.post('/avaliador', this.save )
    }

}
export const avaliadorRouter = new AvaliadorRouter();
