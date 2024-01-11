import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { UserAdapter } from './repositories/user.adapter';
import { UserServiceKey } from './application/ports/user.port';
import { GetFullNamesOfAllUsers } from './application/use-cases/getFullNameOfAllUsers';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: UserServiceKey,
      useClass: UserAdapter,
    },
    GetFullNamesOfAllUsers,
  ],
})
export class AppModule {}
