import { Injectable } from '@nestjs/common';
import { Genre } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GenresService {
  constructor(private prisma: PrismaService) {}

  // Создать жанр
  async create(name: string): Promise<Genre> {
    return this.prisma.genre.create({ data: { name } });
  }

  // Удалить жанр
  async delete(id: number): Promise<Genre> {
    return this.prisma.genre.delete({ where: { id } });
  }

  // Получить все жанры
  async findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }
}
