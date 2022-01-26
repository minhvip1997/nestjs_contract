import { Test, TestingModule } from '@nestjs/testing';
import { TypevalueService } from './typevalue.service';

describe('TypevalueService', () => {
  let service: TypevalueService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypevalueService],
    }).compile();

    service = module.get<TypevalueService>(TypevalueService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
