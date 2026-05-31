import { Exclude } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tasks')
export class Task {
    @PrimaryGeneratedColumn() id!: number;

    @Column() name!: string;

    @Column() description?: string;

    @CreateDateColumn() created_at!: Date;

    @UpdateDateColumn() updated_at!: Date;

    @DeleteDateColumn() deleted_at!: Date;
}