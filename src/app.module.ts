import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SeedServiceService } from './seed-service/seed-service.service';
import { AccountService } from './account/account.service';
import { AccountModule } from './account/account.module';

@Module({
  imports: [AccountModule],
  controllers: [AppController],
  providers: [AppService, SeedServiceService, AccountService],
})
export class AppModule {}
