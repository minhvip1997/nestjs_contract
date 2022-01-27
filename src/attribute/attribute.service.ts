import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, createQueryBuilder, Repository } from 'typeorm';
import { Attribute } from './entity/attribute.entity';
import {getConnection} from "typeorm"; 
import { CreatAttributeDto } from './dto/create_attribute.dto';
import { TypeEntity } from 'src/typeentity/entity/typeentity.entity';
import { TypeValue } from 'src/typevalue/entity/typevalue.entity';
// import { connection } from 'someconnection';

@Injectable()
export class AttributeService {

    constructor(
        @InjectRepository(Attribute) private readonly attributeRepository : Repository<Attribute>,
        @InjectRepository(TypeEntity) private readonly typeentityRepository : Repository<TypeEntity>,
        @InjectRepository(TypeValue) private readonly typevalueRepository : Repository<TypeValue>,
    ){}

    async getAll(): Promise<Attribute[]> {
        return this.attributeRepository.find();
    }


    
    async createAttribute(attribute: CreatAttributeDto){
        // console.log(attribute)
        const protypevalue =  await this.typevalueRepository.findOne(attribute.idtypevalue)

        const protypeentity = await this.typeentityRepository.findOne(attribute.idtypeentity);

        const newAttribute = this.attributeRepository.create(attribute);
        
        // console.log(protypevalue,protypeentity)
        newAttribute.typeentity = protypeentity;

        newAttribute.typevalue = protypevalue;

        return this.attributeRepository.save(newAttribute);
    }
}
