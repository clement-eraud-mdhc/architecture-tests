import { Injectable } from '@nestjs/common';
import { UserService } from 'src/application/ports/user.port';
import { User } from 'src/domain/entities/user';

@Injectable()
export class UserAdapter implements UserService {
  getUsers(): User[] {
    return [
      new User('ab98ef4d-9c5d-5a4b-9074-711b417e2010', 'Rena', 'Wilkins'),
      new User('3e710f71-67be-5f27-ad59-55579165a77a', 'Marguerite', 'McKinney'),
      new User('993a17ca-116a-5b1b-810f-4ab8cc1b6e99', 'Alice', 'Bell'),
      new User('ec7ae71b-c512-5515-bc11-4fb277a7fd30', 'Lettie', 'Reynolds'),
    ];
  }
}
