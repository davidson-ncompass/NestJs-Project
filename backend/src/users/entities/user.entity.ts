import { Column, Entity } from "typeorm";


@Entity()
export class User {
    @Column()
    username: string;
    @Column()
    userEmail: string;
    @Column()
    password: string;
}