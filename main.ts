import {Server} from './server/server'
import {inovacoesRouter} from "./model/inovacao/inovacao.router";

const server = new Server();
server.bootstrap([inovacoesRouter]).then(server => {
    console.log('Server is listening on:')
}).catch(error =>{
    console.log('Server failed to start')
    console.error(error)
    process.exit(1);
});


