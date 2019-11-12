import {ModelRouter} from "../../common/model-router";
import * as restify from 'restify'
import { Sistema } from "./sistema.model";

class SistemaRouter extends ModelRouter<Sistema>{

    constructor(){
        super(Sistema)
        // this.on('beforeRender', document =>{
        //     document.password = undefined;
        // })
    }

    findByMatricula = (req, resp, next)=>{
        if(req.query.matricula){
            Sistema.find({matricula: req.query.matricula})
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
        app.get('/sistema',[this.findByMatricula, this.findAll]);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/sistema/:id',this.findById);
        /**
         * Insert new document in db
         */
        app.post('/sistema', this.save )
    }

}
export const sistemaRouter = new SistemaRouter();