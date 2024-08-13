import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeSetBCO } from "../../use-cases/factories/make-set-bcos";

// Define o esquema para os parâmetros da requisição
const registerParamsSchema = z.object({
    id: z.string().uuid() // Espera um UUID para o ID
});

// Define o esquema para o corpo da requisição, se necessário
const updateBodySchema = z.object({ 
  startRoullete: z.number(),
  finalRoulette: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  line: z.string(),
  date: z.string(),
  car_id: z.string().uuid()
});

export async function setBCO(request: FastifyRequest, reply: FastifyReply) {
    const { id } = registerParamsSchema.parse(request.params);

    const updateData = updateBodySchema.safeParse(request.body);

    if (!updateData.success) {
        return reply.status(400).send({
            error: "Invalid request body",
            details: updateData.error.errors
        });
    }

    try {
       
        const setBCOUseCase = makeSetBCO();

        const bco = await setBCOUseCase.execute({
            id,
            ...updateData.data,
            date: new Date(updateData.data.date)
        });

        return reply.status(200).send(bco);
    } catch (err) {
        return reply.status(500).send({
            error: "Internal Server Error",
            message: err
        });
    }
}
