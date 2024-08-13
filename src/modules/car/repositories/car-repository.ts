import { Car, Prisma } from "@prisma/client";

export interface CarRepository {
    create(data: Prisma.CarCreateInput): Promise<Car>
    set(id: string): Promise<Car>
    list(): Promise<Car[]>
    findById(id: string): Promise<Car | null>
}