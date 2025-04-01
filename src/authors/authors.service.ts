import { Injectable } from '@nestjs/common';
import { Author } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  // Создать автора
  async create(name: string): Promise<Author> {
    return this.prisma.author.create({ data: { name } });
  }

  // Удалить автора
  async delete(id: number): Promise<Author> {
    return this.prisma.author.delete({ where: { id } });
  }

  // Получить всех авторов
  async findAll(): Promise<Author[]> {
    return this.prisma.author.findMany();
  }
}
