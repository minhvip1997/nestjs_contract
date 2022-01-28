import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import { CreatEmployeeContractDto } from './dto/create_employeecontract.dto';
import { EmployeecontractService } from './employeecontract.service';

@Controller('employeecontract')
export class EmployeecontractController {

    constructor(
        private employeecontractService: EmployeecontractService
    ){}

    @Get()
    async getAllEmployeeContract(){
        return this.employeecontractService.getAll();
    }

    @Post('add')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    @ApiCreatedResponse({ type: CreatEmployeeContractDto})
    async createEmployeeContract(@Body() newContract: CreatEmployeeContractDto){
        return this.employeecontractService.createNewContract(newContract);
    }
}
