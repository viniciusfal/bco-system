import { BcoRepository } from "../repositories/bco-repository";

export class ListBCOSUseCase {
    constructor(private bcosRepository: BcoRepository){}
    async execute() {
        const bcos = await this.bcosRepository.list()

        return bcos
    }
}