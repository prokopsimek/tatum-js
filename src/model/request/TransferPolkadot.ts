import {IsNotEmpty, IsNumberString, Length, Matches, Min} from 'class-validator';

export class TransferPolkadot {

    @IsNotEmpty()
    @Length(1, 1000)
    public mnemonic: string;

    @IsNotEmpty()
    @Min(0)
    public index: number;

    @IsNotEmpty()
    @Length(48, 48)
    public to: string;

    @IsNotEmpty()
    @IsNumberString()
    @Matches(/^[+]?((\d+(\.\d*)?)|(\.\d+))$/)
    public amount: string;
}
