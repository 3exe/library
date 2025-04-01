import { Controller, Post, Delete, Body, Param, Get } from '@nestjs/common';
import { LoansService } from './loans.service';
import { Loan } from '@prisma/client';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post()
  async create(
    @Body() data: { bookId: number; userId: number },
  ): Promise<Loan> {
    return this.loansService.createLoan({
      book: { connect: { id: data.bookId } },
      user: { connect: { id: data.userId } },
    });
  }

  @Delete(':id')
  async returnBook(@Param('id') id: string): Promise<Loan> {
    return this.loansService.returnBook(+id);
  }

  @Get()
  async get(): Promise<Loan[]> {
    return this.loansService.getAllLoans();
  }
}
