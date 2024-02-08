import { PartialType } from '@nestjs/swagger';
import { GetAccountDetails } from './create-account.dto';

export class UpdateAccountDto extends PartialType(GetAccountDetails) { }
