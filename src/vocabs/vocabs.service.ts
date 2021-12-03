import { Injectable } from '@nestjs/common';
import { Vocab } from './entities/vocabs.entity';

@Injectable()
export class VocabsService {
  private vocabs: Vocab[] = [
    {
      id: 1,
      title: 'Nest.js FrameWork',
    },
  ];

  findAll() {
    return this.vocabs;
  }

  findOne(id: string) {
    return this.vocabs.find((vocab) => vocab.id === +id);
  }

  create(vocab: Vocab) {
    this.vocabs.push(vocab);
  }

  update(id: string, post: Vocab) {
    const existingVocab = this.findOne(id);
    //   if (existingPost) {
    //   }
  }

  remove(id: string) {
    const indexOfVocab = this.vocabs.findIndex((vocab) => vocab.id === +id);
    if (indexOfVocab >= 0) {
      this.vocabs.splice(indexOfVocab, 1);
    }
  }
}
