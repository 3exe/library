import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  async create(
    @Body() data: { title: string; authorIds?: number[]; genreIds?: number[] },
  ): Promise<Book> {
    return this.booksService.createBook({
      title: data.title,
      authors: { connect: data.authorIds?.map((id) => ({ id })) },
      genres: { connect: data.genreIds?.map((id) => ({ id })) },
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Book> {
    return this.booksService.deleteBook(+id);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.booksService.getAllBooks();
  }
}
