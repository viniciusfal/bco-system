import { FastifyReply, FastifyRequest } from "fastify";
import { makeListCars } from "../../use-cases/factories/make-list-cars";

export async function listCars(_: FastifyRequest, reply: FastifyReply) {
    try {
        const listUseCarsUsecase = makeListCars()

        const response = await listUseCarsUsecase.execute()

        return reply.status(200).send(response)

    } catch(err) {
         return reply.status(404).send()
    }
}