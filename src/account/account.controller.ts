import { Controller, Get, Post, Body, Patch, Param, Request, Delete, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { GetAccountDetails, TransferBalance } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { JwtAuthGuard } from 'src/auth/Guard/localGuard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Get('details')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    getDetails(@Request() req) {

        return this.accountService.getDetails(req.user.account.accountNumber);
    }

    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Post('transfer-balance')
    transferBalance(@Body() TransferBalance: TransferBalance, @Request() req) {
        return this.accountService.transferBalance(TransferBalance, req.user.account)

    }

}
