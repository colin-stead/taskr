import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserDropdownDto } from './dto/user-dropdown.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { PasswordService } from 'src/auth/password.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly passwordService: PasswordService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.passwordService.hashPassword(createUserDto.password);

    return this.userRepository.save(createUserDto);
  }

  async dropdown() {
    const users = await this.userRepository.find();

    return plainToInstance(UserDropdownDto, users, { excludeExtraneousValues: true });
  }

  async findAll() {
    const users = await this.userRepository.find();

    return plainToInstance(UserDto, users, { excludeExtraneousValues: true });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);

    return this.userRepository.save(Object.assign(user, updateUserDto));
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.userRepository.softDelete(id);
  }

  async restore(id: number) {
    await this.userRepository.restore(id);

    return this.findOne(id);
  }
}
