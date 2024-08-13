import { Bco } from "@prisma/client";
import { BcoCreate, BcoRepository } from "../bco-repository";
import { prisma } from "@/lib/prisma";

export class PrismaBCORepository implements BcoRepository{
    async create(data: BcoCreate){
        const bco = await prisma.bco.create({
            data
        })

        return bco
    }

    async setBCO(data: Bco): Promise<Bco | null> {
        const bco = await prisma.bco.findUnique({
            where: {
                id: data.id
            }
        })

        const bcoUpdate = await prisma.bco.update({
            where: {
                id: data.id
            },

            data,
        })

        return bcoUpdate
    }

    async list() {
        const bcos = await prisma.bco.findMany()

        return bcos
    }

    async findById(id: string){
        const bco = await prisma.bco.findUnique({
            where: {
                id
            }
        })

        return bco
    }

    async findByDate(start_time: string){
        const bcos = await prisma.bco.findMany({
            where: {
                startTime: start_time
            }
        })

        return bcos
    }

}