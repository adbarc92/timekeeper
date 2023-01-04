import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/models/users/entities/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private dataSource: DataSource) {}
  getUserByEmployeeId(employeeId: string): string {
    return 'userEmployeeId';
  }
}
