"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const classificacao_model_1 = require("./classificacao.model");
class ClassificacaoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(classificacao_model_1.Classificacao);
        this.findByMatricula = (req, resp, next) => {
            if (req.query.matricula) {
                classificacao_model_1.Classificacao.find({ matricula: req.query.matricula })
                    .then(this.renderAll(resp, next))
                    .catch(next);
            }
            else {
                next();
            }
        };
        // this.on('beforeRender', document =>{
        //     document.password = undefined;
        // })
    }
    applyRoutes(app) {
        /**
         * Get all innovations
         */
        app.get('/classificacao', [this.findByMatricula, this.findAll]);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/classificacao/:id', this.findById);
        /**
         * Insert new document in db
         */
        app.post('/classificacao', this.save);
    }
}
exports.classificacaoRouter = new ClassificacaoRouter();
