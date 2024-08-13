import { PrismaCarRepository } from "../../repositories/prisma-repository/prisma-car-repository"
import { ListCarsUseCase } from "../list-cars"


export function makeListCars() {
  const carRepository = new PrismaCarRepository()
  const listCarsUseCase = new ListCarsUseCase(
    carRepository,
  )

  return listCarsUseCase
}