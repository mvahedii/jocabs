import { Module } from '@nestjs/common';
import { VocabsController } from './vocabs.controller';
import { VocabsService } from './vocabs.service';

@Module({ controllers: [VocabsController], providers: [VocabsService] })
export class VocabsModule {}
