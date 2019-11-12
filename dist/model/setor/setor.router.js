"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const setor_model_1 = require("./setor.model");
class SetorRouter extends model_router_1.ModelRouter {
    constructor() {
        super(setor_model_1.Setor);
    }
    applyRoutes(app) {
        /**
         * Get all innovations
         */
        app.get('/setor', this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/setor/:id', this.findById);
        /**
         * Insert new document in db
         */
        app.post('/setor', this.save);
    }
}
exports.setorRouter = new SetorRouter();
