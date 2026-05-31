import { Expose } from 'class-transformer';

export class UserDropdownDto {
    @Expose() id!: number;
    @Expose() name!: string;
}