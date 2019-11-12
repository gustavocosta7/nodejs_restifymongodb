import {ModelRouter} from "../../common/model-router";
import * as restify from 'restify'
import { Reuniao } from "./reuniao.model";

class ReuniaoRouter extends ModelRouter<Reuniao>{

    constructor(){
        super(Reuniao)
        // this.on('beforeRender', document =>{
        //     document.password = undefined;
        // })
    }

    findByMatricula = (req, resp, next)=>{
        if(req.query.matricula){
            Reuniao.find({matricula: req.query.matricula})
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
        app.get('/reuniao',[this.findByMatricula, this.findAll]);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/reuniao/:id',this.findById);
        /**
         * Insert new document in db
         */
        app.post('/reuniao', this.save )
    }

}
export const reuniaoRouter = new ReuniaoRouter();