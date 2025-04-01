import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from '@prisma/client';

@Controller('genres')
export class GenresController {
  constructor(private readonly genresService: GenresService) {}

  @Post()
  async create(@Body() data: { name: string }): Promise<Genre> {
    return this.genresService.create(data.name);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Genre> {
    return this.genresService.delete(+id);
  }

  @Get()
  async findAll(): Promise<Genre[]> {
    return this.genresService.findAll();
  }
}
