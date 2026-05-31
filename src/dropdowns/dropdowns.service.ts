import { Injectable } from '@nestjs/common';
import { TasksService } from 'src/tasks/tasks.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DropdownsService {
  constructor(
    private readonly tasksService: TasksService,
    private readonly usersService: UsersService
  ) {}

  tasks() {
    return this.tasksService.dropdown();
  }

  users() {
    return this.usersService.dropdown();
  }
}
