import { Test, TestingModule } from '@nestjs/testing';
import { EmployeecontractService } from './employeecontract.service';

describe('EmployeecontractService', () => {
  let service: EmployeecontractService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeecontractService],
    }).compile();

    service = module.get<EmployeecontractService>(EmployeecontractService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
