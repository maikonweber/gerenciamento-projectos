import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class SeedServiceService {
    constructor(private readonly prismaService: PrismaService) {

    }

    async seed() {
        await this.prismaService.bankaccount.create({
            data: {
                accountNumber: 32323232,
                clientDocument: '40880449837',
                clientName: "Maikon Weber de Carvalho",
                currentBalance: 100.0
            }
        })
        await this.prismaService.bankaccount.create({
            data: {
                accountNumber: 11111111,
                clientDocument: '40880449837',
                clientName: "Maikon Weber de Carvalho",
                currentBalance: 100.0
            }
        })
        await this.prismaService.bankaccount.create({
            data: {
                accountNumber: 12395021,
                clientDocument: '40880449837',
                clientName: "Maikon Weber de Carvalho",
                currentBalance: 100.0
            }
        })
    }
}
