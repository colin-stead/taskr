import { Expose } from "class-transformer";

export class TaskDropdownDto {
    @Expose() id!: number;
    @Expose() name!: string;
}