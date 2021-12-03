import { Test, TestingModule } from '@nestjs/testing';
import { VocabsController } from './vocabs.controller';

describe('VocabsController', () => {
  let controller: VocabsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VocabsController],
    }).compile();

    controller = module.get<VocabsController>(VocabsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
