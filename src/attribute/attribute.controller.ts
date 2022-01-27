import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiCreatedResponse } from '@nestjs/swagger';
import { createQueryBuilder, getConnection } from 'typeorm';
import { AttributeService } from './attribute.service';
import { CreatAttributeDto } from './dto/create_attribute.dto';

@Controller('attribute')
export class AttributeController {

    constructor(private attributeService: AttributeService){

    }

    @Get()
    async getAll(){
        return this.attributeService.getAll();
    }

    @Get('getallattributerelation')
    async getAllRelation(){
        const query = createQueryBuilder('attribute', 'w')
        .innerJoinAndSelect('w.typeentity', 'u')
        .innerJoinAndSelect('w.typevalue','q'); // 'w.userId = u.id' may be omitted
        const result = await query.getMany();
        return result;
    }


    @Post('add')
    @UseInterceptors(FileInterceptor(''))
    @ApiConsumes('multipart/form-data')
    @ApiCreatedResponse({ type: CreatAttributeDto})
    async addNewAttribute(@Body() newAttribute: CreatAttributeDto){
        return this.attributeService.createAttribute(newAttribute);
    }
}
