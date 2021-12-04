import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VocabsModule } from './vocabs/vocabs.module';

@Module({
  imports: [VocabsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
