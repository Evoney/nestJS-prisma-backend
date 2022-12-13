import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CreateUserBody } from './dtos/create-user-body';
import { UserRepository } from './repositories/user-repository';
 
@Controller('api')
export class AppController {
  constructor(
    private userRepository: UserRepository
  ) {}

  @Post('user')
  async CreateUser(@Body() body: CreateUserBody)  {
    await this.userRepository.create(body.name, body.function);
  }

  @Put('user/:id')
  async UpdateUser(@Param('id') id: string, @Body() body: CreateUserBody): Promise<void> {
    await this.userRepository.update(id, body.name, body.function);
  }

  @Delete('user/:id')
  async DeleteUser(@Param('id') id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
