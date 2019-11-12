"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const index_1 = require("./model/index");
const arrayRouters = [index_1.inovacoesRouter, index_1.avaliadorRouter, index_1.setorRouter, index_1.reuniaoRouter, index_1.sistemaRouter, index_1.classificacaoRouter];
const server = new server_1.Server();
server.bootstrap(arrayRouters).then(server => {
    console.log('Server is listening');
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
