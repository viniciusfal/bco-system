import { Prisma, Car } from "@prisma/client";
import { CarRepository } from "../car-repository";
import { prisma } from "@/lib/prisma";


export class PrismaCarRepository implements CarRepository {
    async create(data: Prisma.CarCreateInput): Promise<Car> {
        const  car = await prisma.car.create({
            data
        })

        return car
    }
    async set(id: string): Promise<Car> {
        const car = await prisma.car.findUnique({
            where: {
                id
            }
        })

        const newCar = await prisma.car.update({
            where: {
                id
            },
           data: {
            plate: car?.plate,
            prefix: car?.prefix
           }
        })

        return newCar
    }
    async list(): Promise<Car[]> {
        const cars = await prisma.car.findMany()

        return cars
    
    }
    async findById(id: string): Promise<Car | null> {
        const car = await prisma.car.findUnique({
            where: {
                id
            }
        })

        return car
    }
    

    
}