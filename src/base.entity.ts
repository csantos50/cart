import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number;
    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp', nullable: true })
    created?: Date;
    @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP', type: 'timestamp', nullable: true })
    updated?: Date;
}

