import { Injectable } from "@nestjs/common";
import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
    private readonly SALT_ROUNDS = 12;

    // Hash a password for storage
    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, this.SALT_ROUNDS);
    }

    // Check a plain-text password against hashed password from db
    async verifyPassword(password: string, storedHash: string): Promise<boolean> {
        return await bcrypt.compare(password, storedHash);
    }
}