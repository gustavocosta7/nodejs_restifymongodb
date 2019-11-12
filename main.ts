import {Server} from './server/server'
import {avaliacaoRouter, avaliadorRouter, classificacaoRouter, inovacoesRouter, sistemaRouter,setorRouter, reuniaoRouter } from './model/index'

const arrayRouters = [inovacoesRouter, avaliadorRouter, setorRouter,reuniaoRouter,sistemaRouter,classificacaoRouter];

const server = new Server();

server.bootstrap(arrayRouters).then(server => {
    console.log('Server is listening')
}).catch(error =>{
    console.log('Server failed to start');

    console.error(error)
    process.exit(1);
});
