import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { TaskDropdownDto } from './dto/task-dropdown.dto';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>
  ) {}

  findAll() {
    const tasks = this.taskRepository.find();

    return plainToInstance(TaskDto, tasks, { excludeExtraneousValues: true });
  }
  
  dropdown() {
    const tasks = this.taskRepository.find();

    return plainToInstance(TaskDropdownDto, tasks, { excludeExtraneousValues: true });
  }

  async findOne(id: number) {
    const task = await this.taskRepository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(`Task #${id} not found`);
    }

    return task;
  }

  async create(createTaskDto: CreateTaskDto) {
    const task = await this.taskRepository.save(createTaskDto);

    return plainToInstance(TaskDto, task, { excludeExtraneousValues: true });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.taskRepository.softDelete(id);
  }

  // for tasks we can reuser the createDTO, it's the same
  async update(id: number, updateTaskDto: CreateTaskDto) {
    const task = await this.findOne(id);
    const updated = await this.taskRepository.save(Object.assign(task, updateTaskDto));

    return plainToInstance(TaskDto, updated, { excludeExtraneousValues: true });
  }

  async restore(id: number) {
    await this.taskRepository.restore(id);

    return plainToInstance(TaskDto, await this.findOne(id), { excludeExtraneousValues: true });
  }
}
