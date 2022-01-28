import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contract } from 'src/contract/entity/contract.entity';
import { Employee } from 'src/user/entity/employee.entity';
import { Repository } from 'typeorm';
import { CreatEmployeeContractDto } from './dto/create_employeecontract.dto';
import { EmployeeContract } from './entity/employeecontract.entity';

@Injectable()
export class EmployeecontractService {

    constructor(
        @InjectRepository(EmployeeContract) private readonly employeecontractrepository: Repository<EmployeeContract>,
        @InjectRepository(Employee) private readonly employeerepository: Repository<Employee>,
        @InjectRepository(Contract) private readonly contractrepository: Repository<Contract>,
    ){}

    async getAll(){
        return this.employeecontractrepository.find();
    }

    async createNewContract(newContract : CreatEmployeeContractDto){
        const newemployee = await this.employeerepository.findOne(newContract.idemployee);

        const newcontract = await this.contractrepository.findOne(newContract.idcontract);

        const newContractEmployee = this.employeecontractrepository.create(newContract);

        newContractEmployee.contract = newcontract;

        newContractEmployee.employee = newemployee;

        return this.employeecontractrepository.save(newContractEmployee);
    }
}
