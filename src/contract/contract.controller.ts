import { Controller, Get, Param } from '@nestjs/common';
import { ContractService } from './contract.service';

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
}
