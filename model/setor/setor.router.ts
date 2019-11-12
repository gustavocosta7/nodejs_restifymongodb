import {ModelRouter} from "../../common/model-router";
import * as restify from 'restify'
import {Setor} from "./setor.model";

class SetorRouter extends ModelRouter<Setor>{

    constructor(){
        super(Setor)
    }


    applyRoutes(app: restify.Server) {
        /**
         * Get all innovations
         */
        app.get('/setor',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/setor/:id',this.findById);
        /**
         * Insert new document in db
         */
        app.post('/setor', this.save )
    }

}
export const setorRouter = new SetorRouter();
