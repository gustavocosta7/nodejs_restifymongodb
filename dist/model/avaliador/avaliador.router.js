"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const avaliador_model_1 = require("./avaliador.model");
class AvaliadorRouter extends model_router_1.ModelRouter {
    constructor() {
        super(avaliador_model_1.Avaliador);
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
    applyRoutes(app) {
        /**
         * Get all innovations
         */
        app.get('/avaliador', this.findAll);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/avaliador/:id', this.findById);
        /**
         * Insert new document in db
         */
        app.post('/avaliador', this.save);
    }
}
exports.avaliadorRouter = new AvaliadorRouter();
