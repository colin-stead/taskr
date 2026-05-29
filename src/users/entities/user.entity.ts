import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    email!: string;

    @Column()
    first_name!: string;

    @Column()
    last_name!: string;

    @Column()
    @Exclude()
    password!: string;

    @Column()
    role_id!: number;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @DeleteDateColumn()
    @Exclude()
    deleted_at?: Date;

    constructor(partial: Partial<User>) {
        Object.assign(this, partial);
    }
}
