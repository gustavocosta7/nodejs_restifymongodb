"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_router_1 = require("../../common/model-router");
const reuniao_model_1 = require("./reuniao.model");
class ReuniaoRouter extends model_router_1.ModelRouter {
    constructor() {
        super(reuniao_model_1.Reuniao);
        this.findByMatricula = (req, resp, next) => {
            if (req.query.matricula) {
                reuniao_model_1.Reuniao.find({ matricula: req.query.matricula })
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
        app.get('/reuniao', [this.findByMatricula, this.findAll]);
        // app.get({path:'/inovacao', version: '1.0.0'},this.findAll);
        // app.get('/inovacao',this.findAll);
        /**
         * Get a specify innovation
         */
        app.get('/reuniao/:id', this.findById);
        /**
         * Insert new document in db
         */
        app.post('/reuniao', this.save);
    }
}
exports.reuniaoRouter = new ReuniaoRouter();
