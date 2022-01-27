import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length, Max, MaxLength, Min, MinLength } from "class-validator";


export class CreatAttributeDto{
    @ApiProperty({type: String, description: "name"})
    @MinLength(3, { message: 'Tên phải lớn hơn 3 kí tự' })
    @MaxLength(30, { message: 'Tên quá dài' })
    @IsString()
    readonly label: string;


    @ApiProperty({type: Number, description: "entity value"})
    readonly idtypevalue: number;
    
    @ApiProperty({type: Number, description: "entity entity"})
    readonly idtypeentity: number;
    
}