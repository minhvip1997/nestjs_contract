import { Injectable, Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeEntity } from './entity/typeentity.entity';

@Injectable()
export class TypeentityService {

    constructor(
        @InjectRepository(TypeEntity) private readonly typeentityRepository: Repository<TypeEntity>
    ){}

    async getAll(): Promise<TypeEntity[]>{
        return this.typeentityRepository.find();
    }
}
