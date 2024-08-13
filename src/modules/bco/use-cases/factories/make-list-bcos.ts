import { PrismaBCORepository } from "../../repositories/prisma-repository/prisma-bco-repository"
import { ListBCOSUseCase } from "../list-bcos"

export function makeListBCOS() {
    const bcoRepository = new PrismaBCORepository()
    const listBCOSUseCase = new ListBCOSUseCase(bcoRepository)


    return listBCOSUseCase
}