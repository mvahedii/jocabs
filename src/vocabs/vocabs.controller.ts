import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { VocabsService } from './vocabs.service';

@Controller('vocabs')
export class VocabsController {
  constructor(private readonly vocabsService: VocabsService) {}

  @Get()
  findAll() {
    // const { limit, offset } = paginationQuery;
    return this.vocabsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vocabsService.findOne(id);
  }

  @Post()
  create(@Body() body) {
    return this.vocabsService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.vocabsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vocabsService.remove(id);
  }
}
