import { Test, TestingModule } from '@nestjs/testing';
import { DropdownsService } from './dropdowns.service';

describe('DropdownsService', () => {
  let service: DropdownsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DropdownsService],
    }).compile();

    service = module.get<DropdownsService>(DropdownsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
