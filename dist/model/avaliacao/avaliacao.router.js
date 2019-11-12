"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const avaliacao_model_1 = require("./avaliacao.model");
class AvaliacaoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(avaliacao_model_1.Avaliacao);
    }
    applyRoutes(app) {
        app.get('/avaliacao/:id', this.findById);
        /**
         * Insert new document in db
         */
        app.post('/avaliacao', this.save);
    }
}
exports.avaliacaoRouter = new AvaliacaoRouter();
