import { Bco } from "@prisma/client";
import { BcoRepository } from "../repositories/bco-repository";


export class SetBCOUseCase {
    constructor(private bcoRepository: BcoRepository){}

    async execute(data:Bco){
    
        const bco = await this.bcoRepository.findById(data.id)

        if(!bco) {
            throw new Error('BCO is not a found')
        }

        if(bco.startTime >= bco.endTime) {
            throw new Error('StartTime is grater that EndTime')
        }

        if(bco.finalRoulette < bco.startRoullete) {
            throw new Error('initial Roullete is grater that Final Roulette')
        }

        const newBCO = await this.bcoRepository.setBCO(data)

        return newBCO
    }
}