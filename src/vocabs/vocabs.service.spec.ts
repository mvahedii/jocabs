import { Test, TestingModule } from '@nestjs/testing';
import { VocabsService } from './vocabs.service';

describe('ٰVocabsService', () => {
  let service: VocabsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VocabsService],
    }).compile();

    service = module.get<VocabsService>(VocabsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
