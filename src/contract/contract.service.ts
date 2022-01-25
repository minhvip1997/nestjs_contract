import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contract } from './entity/contract.entity';

@Injectable()
export class ContractService {

    constructor(
        @InjectRepository(Contract) private readonly contractRepository: Repository<Contract>
    ) {
      
    }

    async getAll(): Promise<Contract[]> {
        return this.contractRepository.find();
    }

    async getOne(id: number): Promise<Contract> {
        return this.contractRepository.findOne(id);
    }
}
