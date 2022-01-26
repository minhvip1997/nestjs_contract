import { Test, TestingModule } from '@nestjs/testing';
import { TypeentityController } from './typeentity.controller';

describe('TypeentityController', () => {
  let controller: TypeentityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeentityController],
    }).compile();

    controller = module.get<TypeentityController>(TypeentityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
