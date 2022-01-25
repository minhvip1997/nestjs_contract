import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length, Max, MaxLength, Min, MinLength } from "class-validator";


export class CreatEmployeeDto{
    @ApiProperty({type: String, description: "name"})
    @MinLength(3, { message: 'Tên phải lớn hơn 3 kí tự' })
    @MaxLength(30, { message: 'Tên quá dài' })
    @IsString()
    readonly name: string;

    @ApiProperty({type: Number, description: "age"})
    // @IsNumber()
    readonly age: number


    @ApiProperty({ description: "email"})
    @IsEmail()
    readonly email: string

    @ApiProperty({type: String, description: "image"})
    @IsString()
    readonly image: string
}