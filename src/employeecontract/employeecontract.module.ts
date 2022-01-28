import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contract } from 'src/contract/entity/contract.entity';
import { Employee } from 'src/user/entity/employee.entity';
import { EmployeecontractController } from './employeecontract.controller';
import { EmployeecontractService } from './employeecontract.service';
import { EmployeeContract } from './entity/employeecontract.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeContract, Employee, Contract])],
  controllers: [EmployeecontractController],
  providers: [EmployeecontractService]
})
export class EmployeecontractModule {}
