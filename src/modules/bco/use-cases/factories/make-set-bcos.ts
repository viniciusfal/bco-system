import { PrismaBCORepository } from "../../repositories/prisma-repository/prisma-bco-repository"
import { SetBCOUseCase } from "../set-bco"


export function makeSetBCO () {
    const bcoRepository = new PrismaBCORepository()
    const setBCO = new SetBCOUseCase(bcoRepository)


    return setBCO
}