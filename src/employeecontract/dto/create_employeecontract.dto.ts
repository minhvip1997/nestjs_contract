import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length, Max, MaxLength, Min, MinLength } from "class-validator";


export class CreatEmployeeContractDto{
    @ApiProperty({ description: "content", type:String})
    @IsString()
    readonly content: string


    @ApiProperty({type: Number, description: "id contract"})
    readonly idcontract: number;
    
    @ApiProperty({type: Number, description: "id employee"})
    readonly idemployee: number;
    
}