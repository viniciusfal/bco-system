import { Prisma, Bco } from "@prisma/client";
import { BcoCreate, BcoRepository } from "../bco-repository";
import { randomUUID } from "crypto";

export class InMemoryBCORepository implements BcoRepository{
    items: Bco[] = []

    async create(data: BcoCreate){
        const bco = {
            id: randomUUID(),
            startRoullete: data.startRoullete,
            finalRoulette: data.finalRoulette,
            startTime: data.startTime,
            endTime: data.endTime,
            line: data.line,
            date: data.date,
            car_id: data.car_id

        }

        this.items.push(bco)

        return bco

    }
    async setBCO(data: Bco){
        const bcoIndex = this.items.findIndex((b) => b.id === data.id)

        if (!bcoIndex) {
            return null
        }

        const bcoUpdate = this.items[bcoIndex]

        return bcoUpdate
    }
    async list() {
        const bcos = this.items.map((bco) => bco)

        return bcos
    }
    async findById(id: string){
        const bco = this.items.find((b) => b.id === id)

        if(!bco) {
            return null
        }

        return bco
    }

    async findByDate(start_time: string){
        const bcos = this.items.filter((b) => b.startTime === start_time)

        if(!bcos) {
            return null
        }

        return bcos
    }

}