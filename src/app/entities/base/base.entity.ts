import { IsDate, IsUUID } from "class-validator";
import { Column, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";



export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')// this will generate a uuid for the id
    @IsUUID()// this will validate the id to be a uuid
    public id: number; // this will be the id of the entity

    // this will generate a timestamp for the created_at column
    @Column({
        type:'timestamp', 
        default: () => 'CURRENT_TIMESTAMP'
    })
    @CreateDateColumn({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    @IsDate()
    public created_at: Date;


    // this will generate a timestamp for the updated_at column
    @Column({
        type:'timestamp', 
        default: () => 'CURRENT_TIMESTAMP'
    })
    @CreateDateColumn({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    @IsDate()
    public updated_at: Date;
}