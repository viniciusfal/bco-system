import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeRegisterBCO } from "../../use-cases/factories/make-register-bco";

export async function registerBCO(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        startRoullete: z.number(),
        finalRoulette: z.number(),
        car_id: z.string().uuid(),
        endTime: z.string(),
        line: z.string(),
        startTime: z.string(),
        date: z.string()
    })

    const {car_id,endTime, finalRoulette, startRoullete, startTime, date, line} = registerBodySchema.parse(request.body)

    try {
        const registerBCOUseCase = makeRegisterBCO()

        await registerBCOUseCase.execute({
            car_id,
            date: new Date(date),
            endTime,
            line,
            finalRoulette,
            startRoullete,
            startTime,
        })

        return reply.status(200).send()

    } catch(err) {
        return reply.status(409).send({messager: err})
    }
}