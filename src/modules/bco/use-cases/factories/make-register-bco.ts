import { PrismaBCORepository } from "../../repositories/prisma-repository/prisma-bco-repository"
import { RegisterBCOUseCase } from "../register-bco"

export function makeRegisterBCO () {
    const bcoRepository = new PrismaBCORepository()
    const registerBcoUseCase = new RegisterBCOUseCase(bcoRepository)


    return registerBcoUseCase
}