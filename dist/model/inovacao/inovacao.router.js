"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../../common/router");
const inovacao_model_1 = require("./inovacao.model");
class InovacaoRouter extends router_1.Router {
    applyRoutes(app) {
        app.get('/', (req, res, next) => {
            res.json({ message: "hello" });
        });
        /**
         * Get all innovations
         */
        app.get('/inovacao', (req, res, next) => {
            inovacao_model_1.Inovacao.find().then(inovacoes => {
                res.json(inovacoes);
            });
        });
        /**
         * Get a specify innovation
         */
        app.get('/inovacao/:id', (req, res, next) => {
            inovacao_model_1.Inovacao.findById(req.params.id).then(inovacao => {
                if (inovacao) {
                    res.json(inovacao);
                    return next();
                }
                res.send(404);
                return next();
            });
        });
        /**
         * Insert new document in db
         */
        app.post('/inovacao', (req, res, next) => {
            let inovacao = new inovacao_model_1.Inovacao(req.body);
            inovacao.save().then(inovacao => {
                res.json(inovacao);
                return next();
            });
        });
    }
}
exports.inovacoesRouter = new InovacaoRouter();
