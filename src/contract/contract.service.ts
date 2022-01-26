import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatContractDto } from './dto/create-contract.dto';
import { EditContractDto } from './dto/edit-contract.dto';
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

    async editOne(id: number, dto:  EditContractDto){
        const contract = await this.getOne(id)
        const editContract = Object.assign(contract, dto);
  
        return await this.contractRepository.save(editContract);
    }

    async deleteContract(id: number): Promise<Contract> {
        try {
          const contract = await this.getOne(id);
    
          return this.contractRepository.remove(contract); 
        } catch (error) {
            throw error;
        }
    
      }

      createContract(contract: CreatContractDto){
        

        const newContract = this.contractRepository.create(contract);

        return this.contractRepository.save(newContract);
    }
}
