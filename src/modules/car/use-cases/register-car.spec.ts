import {describe, beforeEach, expect, it} from 'vitest'


import { InMemoryCarsRepository } from "../repositories/in-memory/in-memory-cars-repository";
import { RegisterCarUseCase } from "./register-car";


let carRepository: InMemoryCarsRepository
let sut: RegisterCarUseCase

describe('Register Use Case', () => {
    beforeEach(() => {
        carRepository = new InMemoryCarsRepository()
        sut = new RegisterCarUseCase(carRepository)
    })

    it('should be able register car', async () => {
        const {car} = await sut.execute({
            plate: 'jsx252a',
            prefix: '1001' 
        })

        expect(car.id).toEqual(expect.any(String))
    }) 



})