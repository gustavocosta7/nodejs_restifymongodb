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
const restify = require("restify");
const mongoose = require("mongoose");
const environment_1 = require("../common/environment");
class Server {
    initializeDb() {
        return __awaiter(this, void 0, void 0, function* () {
            mongoose.Promise = global.Promise;
            return mongoose.connect(environment_1.environment.db.url, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        });
    }
    initRoutes(routers) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this.application = restify.createServer({
                        name: 'teste-api',
                        version: '1.0.0'
                    });
                    this.application.use(restify.plugins.queryParser());
                    this.application.use(restify.plugins.bodyParser());
                    //routes
                    for (let router of routers) {
                        router.applyRoutes(this.application);
                    }
                    this.application.listen(environment_1.environment.server.port, () => {
                        resolve(this.application);
                    });
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    bootstrap(routers = []) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.initializeDb().then(() => {
                this.initRoutes(routers).then(() => this);
            });
        });
    }
}
exports.Server = Server;
