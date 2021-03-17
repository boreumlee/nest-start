import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  async findAll() {
    return new Promise((resolve) => setTimeout(() => resolve(this.users), 100));
  }
  findOne(id: string): UserDto | object {
    const foundOne = this.users.filter((user) => user.userId === id);
    return foundOne.length ? foundOne[0] : { msg: 'nothing' };
  }
  saveUser(userDto: UserDto): void {
    this.users = [...this.users, userDto];
  }
}
