import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

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
  loginIn(@Body() login: LoginDto) {
    return this.authService.loginIn(login.accountNumber);
  }
}
