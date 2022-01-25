import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length, Max, MaxLength, Min, MinLength } from "class-validator";
import { CreatEmployeeDto } from "./create-employee.dto";


export class EditEmployeeDto extends PartialType(CreatEmployeeDto){

}