import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthorsModule } from './authors/authors.module';
import { GenresModule } from './genres/genres.module';
import { UsersModule } from './users/users.module';
import { LoansModule } from './loans/loans.module';

@Module({
  imports: [
    BooksModule,
    PrismaModule,
    AuthorsModule,
    GenresModule,
    UsersModule,
    LoansModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
