import { CarRepository } from "../repositories/car-repository";

export class ListCarsUseCase {

    constructor(private carRpository: CarRepository) {}

    async execute() {
        const cars = await this.carRpository.list()

        return cars
    }
}