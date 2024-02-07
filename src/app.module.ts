import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SeedServiceService } from './seed-service/seed-service.service';
import { AccountService } from './account/account.service';
import { AccountModule } from './account/account.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [AccountModule, AuthModule, PrismaModule],
  controllers: [],
  providers: [AppService, SeedServiceService, AccountService, AuthService],
})
export class AppModule { }
