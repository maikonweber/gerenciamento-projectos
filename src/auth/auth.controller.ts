import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { Account } from 'src/account/entities/account.entity';

class LoginDto {
  @ApiProperty()
  accountNumber: number
}

@ApiTags("auth")
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  create(@Body() login: LoginDto) {
    return this.authService.loginIn(login.accountNumber);
  }
}
