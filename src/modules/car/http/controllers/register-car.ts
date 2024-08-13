import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeRegisterCar } from "../../use-cases/factories/make-register-car";

export async function registerCar(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        plate: z.string(),
        prefix: z.string()
    })

    const {plate, prefix} = registerBodySchema.parse(request.body)


    try {
        const registerCarUseCase = makeRegisterCar()

        await registerCarUseCase.execute({
            plate,
            prefix
        })

        return reply.status(201).send()
    } catch(err) {
        return reply.status(409).send({message: err})
    }
}