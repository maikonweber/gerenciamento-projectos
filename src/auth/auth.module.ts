import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Prisma } from '@prisma/client';
import { PrismaModule } from 'prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './JwtContant';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [JwtModule.register({
    privateKey: jwtConstants.secret,
    signOptions: { expiresIn: '5d' }
  }), PrismaModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
