import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class SeedServiceService {
    constructor(private readonly prismaService: PrismaService) {

    }

    async seed() {
        await this.prismaService.bankAccount.create({
            data: {
                accountNumber: 32020893,
                clientDocument: '40880449837',
                clientName: "Maikon Weber de Carvalho",
                currentBalance: 100.0
            }
        })
    }
}
