import { Controller, Get } from '@nestjs/common';
import { TypeentityService } from './typeentity.service';

@Controller('typeentity')
export class TypeentityController {

    constructor(private typeentityService: TypeentityService){
        
    }

    @Get()
    async getAllTypeEntity(){
        return  this.typeentityService.getAll();
    }
}
