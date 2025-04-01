import { Controller, Post, Delete, Body, Param, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '@prisma/client';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: { name: string; email: string }): Promise<User> {
    return this.usersService.createUser(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<User> {
    return this.usersService.deleteUser(+id);
  }

  @Get()
  async get(): Promise<User[]> {
    return this.usersService.getAllUsers();
  }
}
