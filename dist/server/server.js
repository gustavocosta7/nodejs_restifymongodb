"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const environment_1 = require("../common/environment");
class Server {
    initRoutes() {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    name: 'teste-api',
                    version: '1.0.0'
                });
                this.application.use(restify.plugins.queryParser());
                //routes
                this.application.get('/info', ((req, res, next) => {
                    // res.status(200)
                    // res.setHeader('Content-Type', 'application/json')
                    res.json({
                        browser: req.userAgent(),
                        method: req.method,
                        url: req.url,
                        path: req.path(),
                        query: req.query
                    });
                    return next();
                }));
                this.application.listen(environment_1.environment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    bootstrap() {
        return this.initRoutes().then(() => this);
    }
}
exports.Server = Server;
