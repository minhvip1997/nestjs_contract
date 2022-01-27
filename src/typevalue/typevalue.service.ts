import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeValue } from './entity/typevalue.entity';

@Injectable()
export class TypevalueService {

    constructor(
        @InjectRepository(TypeValue) private readonly typevalueRepository: Repository<TypeValue>
    ){}

    async getAll(): Promise<TypeValue[]>{
        return this.typevalueRepository.find();
    }
}
