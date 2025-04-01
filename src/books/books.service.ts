import { Injectable, NotFoundException } from '@nestjs/common';
import { Book, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}

  async createBook(data: Prisma.BookCreateInput): Promise<Book> {
    return this.prisma.book.create({ data });
  }

  async deleteBook(id: number): Promise<Book> {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) throw new NotFoundException('Книга не найдена');
    return this.prisma.book.delete({ where: { id } });
  }

  async getAllBooks(): Promise<Book[]> {
    return this.prisma.book.findMany({
      include: { genres: true, authors: true },
    });
  }
}
