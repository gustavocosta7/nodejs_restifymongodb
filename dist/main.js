"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const inovacao_router_1 = require("./model/inovacao/inovacao.router");
const server = new server_1.Server();
server.bootstrap([inovacao_router_1.inovacoesRouter]).then(server => {
    console.log('Server is listening on:');
}).catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
