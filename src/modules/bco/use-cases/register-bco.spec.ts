import {describe, beforeEach, expect, it} from 'vitest'
import { InMemoryBCORepository } from '../repositories/in-memory/in-memory-bco-repository'
import { RegisterBCOUseCase } from './register-bco'


let bcoRepository: InMemoryBCORepository
let sut: RegisterBCOUseCase

describe('Register Use Case', () => {
    beforeEach(() => {
        bcoRepository = new InMemoryBCORepository()
        sut = new RegisterBCOUseCase(bcoRepository)
    })

    it('should be able register bco', async () => {
        
        const {bco} = await sut.execute({
            startTime: '12:00',
            endTime: '13:00',
            line: '1001',
            date: new Date(),
            startRoullete: 1200,
            finalRoulette: 1280,
            car_id: '123546'
        })

        expect(bco.id).toEqual(expect.any(String))
    }) 

    it('should not be able register bco case startTime some endTime', async () => {
         await expect(() => sut.execute({
            startTime: '14:00',
            endTime: '13:00',
            line: '1001',
            date: new Date(),
            startRoullete: 1200,
            finalRoulette: 1280,
            car_id: '123546'
         })).rejects.toBeInstanceOf(Error)

    })
    
    it('Should not be able to register case start-roullete to be greater end-roullete', async () => {
        await expect(() => sut.execute({
            startTime: '12:00',
            endTime: '13:00',
            line: '1001',
            date: new Date(),
            startRoullete: 1300,
            finalRoulette: 1200,
            car_id: '123546'
        })).rejects.toBeInstanceOf(Error)
    })


})