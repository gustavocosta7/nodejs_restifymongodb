import { ModelRouter } from "../../common/model-router";
import * as restify from 'restify'
import { Avaliacao } from "./avaliacao.model";

class AvaliacaoRouter extends ModelRouter<Avaliacao> {
    constructor(){
        super(Avaliacao)
    }

    applyRoutes(app: restify.Server) {

        app.get('/avaliacao/:id',this.findById);
        /**
         * Insert new document in db
         */
        app.post('/avaliacao', this.save )
    }

}
export const avaliacaoRouter = new AvaliacaoRouter();
