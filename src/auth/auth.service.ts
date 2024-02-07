import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {
  }
  loginIn(accountNumber: number) {
    return this.prismaService.bankAccount.findFirstOrThrow({
      where: {
        accountNumber: accountNumber
      }
    });
  }
}
