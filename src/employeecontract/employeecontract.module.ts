import { Module } from '@nestjs/common';
import { EmployeecontractController } from './employeecontract.controller';
import { EmployeecontractService } from './employeecontract.service';

@Module({
  controllers: [EmployeecontractController],
  providers: [EmployeecontractService]
})
export class EmployeecontractModule {}
