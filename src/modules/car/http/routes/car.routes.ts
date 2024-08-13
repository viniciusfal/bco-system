import { FastifyInstance } from "fastify";
import { registerCar } from "../controllers/register-car";
import { listCars } from "../controllers/list-cars";

export async function carRoutes(app: FastifyInstance) {
    app.post('/car', registerCar)
    app.get('/cars', listCars )
}






