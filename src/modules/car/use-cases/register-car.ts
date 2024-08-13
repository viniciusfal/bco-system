import { CarRepository } from "../repositories/car-repository";

interface RegisterCarUseCaseRequest {
    plate: string
    prefix: string
}

export class RegisterCarUseCase {
    constructor(private carsRepository: CarRepository) {}

    async execute({plate, prefix}: RegisterCarUseCaseRequest) {
        const car = await this.carsRepository.create({
            plate,
            prefix
        })

        return {car}
    }
}