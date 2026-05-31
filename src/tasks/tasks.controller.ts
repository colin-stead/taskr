import {
  Controller,
  Get,
  Post,
  Delete,
  Patch,
  Param,
  ParseIntPipe,
  Body,
  HttpCode
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task.interface';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findOne(+id);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: CreateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Patch(':id/restore')
  restore(@Param('id') id: string) {
    return this.tasksService.restore(+id);
  }

  @Delete(':id') @HttpCode(204)
  delete(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
