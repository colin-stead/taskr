import { Injectable, Res, Response } from '@nestjs/common';
import { Task } from './interfaces/task.interface'
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            id: 1,
            name: 'Weed Eating'
        },
        {
            id: 2,
            name: 'Mowing'
        },
        {
            id: 3,
            name: 'Dih Eating 🥀'
        },
    ]

    getTasks(): Task[] {
        return this.tasks;
    }

    findTask(id: number): Task|undefined {
        return this.tasks.find(task => task.id === id);
    }

    create(createTaskDTO: CreateTaskDTO) {
        var latestTask = this.tasks.at(-1)!;
        var id = latestTask.id + 1;

        var task : Task = {
            id: id,
            name: createTaskDTO.name,
            description: createTaskDTO.description
        }

        this.tasks.push(task);

        return task;
    }

    delete(task: Task) {
        this.tasks = this.tasks.filter(value => value.id !== task.id)
    }
}
