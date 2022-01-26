import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length, Max, MaxLength, Min, MinLength } from "class-validator";
import { CreatContractDto } from "./create-contract.dto";


export class EditContractDto extends PartialType(CreatContractDto){

}