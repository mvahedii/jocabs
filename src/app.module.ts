import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabsController } from './vocabs/vocabs.controller';
import { VocabsService } from './vocabs/vocabs.service';

@Module({
  imports: [],
  controllers: [AppController, VocabsController],
  providers: [AppService, VocabsService],
})
export class AppModule {}
