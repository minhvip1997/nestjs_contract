import { Test, TestingModule } from '@nestjs/testing';
import { TypevalueController } from './typevalue.controller';

describe('TypevalueController', () => {
  let controller: TypevalueController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypevalueController],
    }).compile();

    controller = module.get<TypevalueController>(TypevalueController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
