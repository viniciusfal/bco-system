import { Bco, Prisma } from "@prisma/client";

export interface BcoCreate  {
    startRoullete: number;
    finalRoulette: number;
    startTime: string;
    endTime: string;
    line: string
    date: Date;
    car_id: string;
}

export interface BcoRepository {
     create(data: BcoCreate): Promise<Bco>
     setBCO(data: Bco): Promise<Bco | null>
     list(): Promise<Bco[]>
     findById(id: string): Promise<Bco | null >
     findByDate(start_time: string): Promise<Bco[] | null>
}