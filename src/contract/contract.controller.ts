import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import { ContractService } from './contract.service';
import { CreatContractDto } from './dto/create-contract.dto';
import { EditContractDto } from './dto/edit-contract.dto';

@Controller('contract')
export class ContractController {

    constructor(private contractService: ContractService){}

    @Get()
    getAll(){
        return this.contractService.getAll()
    }

    @Get(':id')
    getContractId(@Param('id') id:number){
        return this.contractService.getOne(id);
    }

    @Put(':id')
    editContractID(@Param('id') id: number, @Body() editContractDto: EditContractDto ){
        return this.contractService.editOne(id, editContractDto);
    }

    @Delete(':id')
    deleteEmployee(@Param('id') id: number){
        return this.contractService.deleteContract(id);
    }

    @Post('add')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    @ApiCreatedResponse({ type: CreatContractDto})
    createContract(@Body() createContract: CreatContractDto){
        // console.log(createEmployee)
        return this.contractService.createContract(createContract);
    }
}
