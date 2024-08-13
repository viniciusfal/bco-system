import { BcoRepository } from "../repositories/bco-repository";


interface RegisterBCOUseCaseReuest {
    startRoullete: number;
    finalRoulette: number;
    startTime: string;
    endTime: string;
    line: string
    date: Date;
    car_id: string;
}
export class RegisterBCOUseCase {
    constructor(private bcoRepository: BcoRepository) {}

    async execute({car_id, date, endTime, finalRoulette, startRoullete, startTime, line}: RegisterBCOUseCaseReuest){
        const bco = await this.bcoRepository.create({
            startRoullete, 
            car_id, date,
            endTime, 
            finalRoulette,
            startTime,
            line
        })

        if(bco.startTime >= bco.endTime) {
            throw new Error('The initial dateTime is equal or greater at end DateTime ')
        }

        if(bco.startRoullete > bco.finalRoulette) {
            throw new Error('roullete is declared error')

        }

        return {bco}
    }

}