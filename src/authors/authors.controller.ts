import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { Author } from '@prisma/client';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  async create(@Body() data: { name: string }): Promise<Author> {
    return this.authorsService.create(data.name);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Author> {
    return this.authorsService.delete(+id);
  }

  @Get()
  async findAll(): Promise<Author[]> {
    return this.authorsService.findAll();
  }
}
