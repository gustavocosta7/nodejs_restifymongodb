"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
const users_model_1 = require("../dist/users/users.model");
class UserRouter extends router_1.Router {
    applyRoutes(application) {
        application.get('/users', (req, res) => {
            res.json({ message: 'users ok' });
        });
        application.get('/users/:id', (req, res, next) => {
            users_model_1.User.findById(req.params.id).then(user => {
                if (user) {
                    res.json(user);
                    return next();
                }
                res.send(404);
                return next();
            });
        });
    }
}
exports.usersRouter = new UserRouter();
