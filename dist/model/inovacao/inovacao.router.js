"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const inovacao_model_1 = require("./inovacao.model");
class InovacaoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(inovacao_model_1.Inovacao);
        this.findByMatricula = (req, resp, next) => {
            if (req.query.matricula) {
                inovacao_model_1.Inovacao.find({ matricula: req.query.matricula })
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
        app.get('/', (req, res, next) => {
            res.json({ message: "hello" })
                .catch(next);
        });
        /**
         * Get all innovations
         */
        app.get('/inovacao', [this.findByMatricula, this.findAll]);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/inovacao/:id', this.findById);
        /**
         * Insert new document in db
         */
        app.post('/inovacao', this.save);
    }
}
exports.inovacoesRouter = new InovacaoRouter();
