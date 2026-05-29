import { Controller, Get, Post, Delete, Put, NotFoundException, Param, ParseIntPipe, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';
import { CreateTaskDTO } from './dto/create-task.dto';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get('tasks')
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get('tasks/:id')
  findTask(@Param('id', ParseIntPipe) id: number) {
    let task:Task|undefined = this.tasksService.findTask(id);

    if (!task) {
        throw new NotFoundException;
    }

    return task;
  }

  @Post('tasks')
  create(@Body() createTaskDTO: CreateTaskDTO) {
    var task:Task = this.tasksService.create(createTaskDTO);

    return task;
  }

  @Delete('tasks/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    let task:Task|undefined = this.tasksService.findTask(id);

    if (!task) {
        throw new NotFoundException;
    }

    this.tasksService.delete(task);
  }
}
