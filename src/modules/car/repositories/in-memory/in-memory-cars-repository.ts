import { Prisma, Car } from "@prisma/client";
import { CarRepository } from "../car-repository";
import { randomUUID } from "crypto";

export class InMemoryCarsRepository implements CarRepository {
    public items: Car[] = []

    async create(data: Prisma.CarCreateInput){
        const car = {
            id: randomUUID(),
            plate: data.plate,
            prefix: data.prefix,
            
        }

        this.items.push(car)
        
        return car
    }
    async set(id: string) {
        const carIndex = this.items.findIndex((car) => car.id === id)

        

        return this.items[carIndex]

    }

    async list(){
        const cars = this.items.map((car) => car)

        return cars
    }
    async findById(id: string) {
        const car = this.items.find(car => car.id === id )

        if(!car) {
            return null
        }


        return car
    }

}