import { Module } from '@nestjs/common';
import { DropdownsService } from './dropdowns.service';
import { DropdownsController } from './dropdowns.controller';
import { TasksService } from 'src/tasks/tasks.service';
import { UsersService } from 'src/users/users.service';
import { Task } from 'src/tasks/entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { PasswordService } from 'src/auth/password.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), TypeOrmModule.forFeature([User])],
  controllers: [DropdownsController],
  providers: [DropdownsService, TasksService, UsersService, PasswordService],
})
export class DropdownsModule {}
