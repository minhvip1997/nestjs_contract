import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length, Max, MaxLength, Min, MinLength } from "class-validator";


export class CreatContractDto{
    @ApiProperty({type: String, description: "name"})
    @MinLength(3, { message: 'Tên phải lớn hơn 3 kí tự' })
    @MaxLength(30, { message: 'Tên quá dài' })
    @IsString()
    readonly name: string;


    @ApiProperty({ description: "email", type:String})
    @IsString()
    readonly content: string

    
}