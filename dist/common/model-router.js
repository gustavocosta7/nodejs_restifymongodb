"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("./router");
class ModelRouter extends router_1.Router {
    constructor(model) {
        super();
        this.model = model;
        this.findAll = (req, res, next) => {
            this.model.find().then(this.renderAll(res, next))
                .catch(next);
        };
        this.findById = (req, res, next) => {
            this.model.findById(req.params.id).then(this.render(res, next))
                .catch(next);
        };
        this.save = (req, res, next) => {
            let document = new this.model(req.body);
            document.save().then(this.render(res, next))
                .catch(next);
        };
    }
}
exports.ModelRouter = ModelRouter;
