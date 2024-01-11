import { Controller, Get } from '@nestjs/common';
import { GetFullNamesOfAllUsers } from 'src/application/use-cases/getFullNameOfAllUsers';

@Controller()
export class AppController {
  constructor(
    private useCase: GetFullNamesOfAllUsers
  ) {}

  @Get()
  getFullNamesOfAllUsers(): string[] {
    return this.useCase.execute();
  }
}
