import { Test, TestingModule } from '@nestjs/testing';
import { EmployeecontractController } from './employeecontract.controller';

describe('EmployeecontractController', () => {
  let controller: EmployeecontractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeecontractController],
    }).compile();

    controller = module.get<EmployeecontractController>(EmployeecontractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
