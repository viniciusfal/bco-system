import { CarRepository } from "../repositories/car-repository"

interface SetCarUseCaseRequest {
    id: string
}



export class setCarUseCase {

    constructor(private carRepository: CarRepository ) {}
    
    async execute({id}: SetCarUseCaseRequest){
        const car = await this.carRepository.findById(id)

        if(!car) {
            throw new Error('This user is not found')
        }

        const carUpdate = await this.carRepository.set(id)

        return carUpdate
    }
}