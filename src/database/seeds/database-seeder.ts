import { Injectable } from '@nestjs/common';
// import { UsersSeeder } from './users-seeder';
// import { RolesSeeder } from './roles-seeder';

@Injectable()
export class DatabaseSeeder {
  constructor(
    // private usersSeeder: UsersSeeder,
  ) {}

  async run() {
    // await this.usersSeeder.run();
  }
}
