import { ApiProperty } from "@nestjs/swagger"

export class GetAccountDetails {
    accountNumber: number
}

export class TransferBalance {
    @ApiProperty()
    senderAccount: number
    @ApiProperty()
    balance: number
}