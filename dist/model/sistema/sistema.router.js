"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const sistema_model_1 = require("./sistema.model");
class SistemaRouter extends model_router_1.ModelRouter {
    constructor() {
        super(sistema_model_1.Sistema);
        this.findByMatricula = (req, resp, next) => {
            if (req.query.matricula) {
                sistema_model_1.Sistema.find({ matricula: req.query.matricula })
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
        app.get('/sistema', [this.findByMatricula, this.findAll]);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/sistema/:id', this.findById);
        /**
         * Insert new document in db
         */
        app.post('/sistema', this.save);
    }
}
exports.sistemaRouter = new SistemaRouter();
