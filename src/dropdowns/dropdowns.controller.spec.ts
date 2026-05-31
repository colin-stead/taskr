import { Test, TestingModule } from '@nestjs/testing';
import { DropdownsController } from './dropdowns.controller';
import { DropdownsService } from './dropdowns.service';

describe('DropdownsController', () => {
  let controller: DropdownsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DropdownsController],
      providers: [DropdownsService],
    }).compile();

    controller = module.get<DropdownsController>(DropdownsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
