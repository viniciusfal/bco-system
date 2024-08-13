import { FastifyInstance } from "fastify";
import { registerBCO } from "../controllers/register-bco-controller";
import { listBCOS } from "../controllers/list-bcos-controllers";
import { setBCO } from "../controllers/set-bco-controller";

export async function bcoRoutes(app: FastifyInstance) {
    app.post('/bco', registerBCO)
    app.get('/bcos', listBCOS)
    app.put('/bco/:id', setBCO)
    
}