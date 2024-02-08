import { Injectable, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PrismaService } from 'prisma/prisma.service';
import { JwtAuthGuard } from 'src/auth/Guard/localGuard';
import { ApiBasicAuth } from '@nestjs/swagger';
import { TransferBalance } from './dto/create-account.dto';
import { error } from 'console';

@Injectable()
export class AccountService {
  constructor(private readonly prismaService: PrismaService) {

  }


  getDetails(accountNumber) {
    return this.prismaService.bankaccount.findFirstOrThrow(
      {
        where: {
          accountNumber: +accountNumber
        }
      }
    )
  }

  async transferBalance(TransferBalance: TransferBalance, senderAccount) {
    try {
      await this.prismaService.$transaction(async (prisma) => {
        // Verificar se a conta existe
        const accountSender = await prisma.bankaccount.findFirstOrThrow(
          {
            where: {
              accountNumber: TransferBalance.senderAccount
            }
          })
        if (!accountSender) throw new error("Account Enviada não Existe")

        const accountOrigin = await prisma.bankaccount.findFirstOrThrow(
          {
            where: {
              accountNumber: senderAccount.accountNumber
            }
          }
        )

        const newBalanceOrigin = accountOrigin.currentBalance - TransferBalance.balance

        if (newBalanceOrigin < 0) throw new InternalServerErrorException(`Não possível fazer a transferência valor da conta insuficiente valor em conta ${accountOrigin.currentBalance}`);

        await prisma.bankaccount.update(
          {
            where: {
              accountNumber: accountOrigin.accountNumber
            },
            data: {
              currentBalance: newBalanceOrigin
            }
          }
        )

        await prisma.bankaccount.update({
          where: {
            accountNumber: accountSender.accountNumber
          },
          data: {
            currentBalance: (accountSender.currentBalance + TransferBalance.balance)
          }
        })

        await prisma.financialtransaction.create({
          data: {
            accountOriginId: accountOrigin.id,
            accountNumber: accountSender.accountNumber,
            amount: TransferBalance.balance,
            transactionType: "Transfer"
          }
        })
      })

    } catch (error) {
      return error
    }
  }
}