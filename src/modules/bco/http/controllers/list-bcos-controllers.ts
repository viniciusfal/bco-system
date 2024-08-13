import { FastifyReply, FastifyRequest } from "fastify";
import { makeListBCOS } from "../../use-cases/factories/make-list-bcos";

export async function listBCOS(_: FastifyRequest, reply: FastifyReply) {
    try {
        const listBCOSUseCase = makeListBCOS()

        const bcos = await listBCOSUseCase.execute()

        return reply.status(200).send(bcos)
    } catch(err) {
        return reply.status(400).send({messgae: err})
    }
}