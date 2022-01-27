import { Controller, Get } from '@nestjs/common';
import { TypevalueService } from './typevalue.service';

@Controller('typevalue')
export class TypevalueController {

    constructor(private typevalueService: TypevalueService){
        
    }

    @Get()
    async getAllTypeEntity(){
        return  this.typevalueService.getAll();
    }
}
