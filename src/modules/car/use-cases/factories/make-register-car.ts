import { PrismaCarRepository } from "../../repositories/prisma-repository/prisma-car-repository"
import { RegisterCarUseCase } from "../register-car"


export function makeRegisterCar() {
  const carRepository = new PrismaCarRepository()
  const registerCarRepository = new RegisterCarUseCase(
    carRepository,
  )

  return registerCarRepository
}