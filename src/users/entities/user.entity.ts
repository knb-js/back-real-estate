import { Column, DeleteDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryColumn()
    rut: number;

    @Column()
    dv:string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column({unique :true})
    phone: string;

    @Column({unique :true})
    birthday: string;

    @Column({unique :true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({default: 'user'})
    rol: string;

    @DeleteDateColumn()
    deletedAt:Date;

}

