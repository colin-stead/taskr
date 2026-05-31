import { Controller, Get } from '@nestjs/common';
import { DropdownsService } from './dropdowns.service';

@Controller('dropdown')
export class DropdownsController {
  constructor(private readonly dropdownsService: DropdownsService) {}

  @Get('tasks')
  tasks() {
    return this.dropdownsService.tasks();
  }

  @Get('users')
  users() {
    return this.dropdownsService.users();
  }
}
