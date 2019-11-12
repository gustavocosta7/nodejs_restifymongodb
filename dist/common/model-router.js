"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        // saveNumber = async (req, res, next) => {
        //     req.body['num_inovacao'] = await this.model.countDocuments() + "/" + new Date().getFullYear()
        //     let document = new this.model(req.body);
        //     document.save().then(this.render(res,next))
        //         .catch(next);
        // }
        this.findByMat = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield this.model.find({ autor_matricula: req.query.matricula });
            // console.log(usuarios)
            const data = new Date(usuarios[0]['dt_criacao']);
            // this.model.deleteMany({'$expr':{'$eq' : [{'$year' : '$dt_criacao'}, 2019]}})
            // console.log(data.getFullYear())
            const byData = yield this.model.findOne({ '$expr': { '$eq': [{ '$year': '$dt_criacao' }, 2019] } }).sort({ 'num_inovacao': -1 });
            console.log(byData['num_inovacao']);
            this.model.find({ autor_matricula: req.query.matricula }).then(this.render(res, next))
                .catch(next);
        });
    }
}
exports.ModelRouter = ModelRouter;
