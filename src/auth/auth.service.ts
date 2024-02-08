import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService) {

  }
  async loginIn(accountNumber: number) {
    const account = await this.prismaService.bankaccount.findFirstOrThrow({
      where: {
        accountNumber: accountNumber
      }
    });
    if (!account) throw new NotAcceptableException("Could find a user")
    const acess_token: string = await this.jwtService.signAsync(
      {
        account
      }
    )
    return acess_token

  }
  findAccount(accountNumber: number) {
    return this.prismaService.bankaccount.findFirstOrThrow({
      where: {
        accountNumber: accountNumber
      }
    })
  }
}
