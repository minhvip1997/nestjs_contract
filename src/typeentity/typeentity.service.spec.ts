import { Test, TestingModule } from '@nestjs/testing';
import { TypeentityService } from './typeentity.service';

describe('TypeentityService', () => {
  let service: TypeentityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeentityService],
    }).compile();

    service = module.get<TypeentityService>(TypeentityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
