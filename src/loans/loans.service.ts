import { Injectable, NotFoundException } from '@nestjs/common';
import { Loan, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) {}

  async createLoan(data: Prisma.LoanCreateInput): Promise<Loan> {
    return this.prisma.loan.create({ data });
  }

  async returnBook(loanId: number): Promise<Loan> {
    const loan = await this.prisma.loan.findUnique({ where: { id: loanId } });
    if (!loan) throw new NotFoundException('Выдача не найдена');
    return this.prisma.loan.delete({ where: { id: loanId } });
  }

  async getAllLoans(): Promise<Loan[]> {
    return this.prisma.loan.findMany({
      include: {
        book: { include: { authors: true, genres: true } },
        user: true,
      },
    });
  }
}
