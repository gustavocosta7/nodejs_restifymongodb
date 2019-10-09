"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerError = (req, res, err, done) => {
    err.toJSON = () => {
        return {
            message: err.message
        };
    };
    switch (err.nackCount) {
        case 'MongoError':
            if (err.code === 11000) {
                err.status = 404;
            }
            break;
        case 'ValidationError':
            err.statusCode = 400;
            const messages = [];
            for (let name in err.errors) {
                messages.push({ message: err.errors[name].message });
            }
            err.toJSON = () => ({
                errors: messages
            });
            break;
    }
    done();
};
