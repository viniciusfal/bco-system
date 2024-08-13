import {fastify} from 'fastify'
import { carRoutes } from './modules/car/http/routes/car.routes'
import { bcoRoutes } from './modules/bco/http/routes/bco.routes'

export const app = fastify()

app.register(carRoutes)
app.register(bcoRoutes)