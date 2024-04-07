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

    @Column()
    birthday: string;

    @Column({unique :true, nullable: false})
    email: string;

    @Column({nullable: false})
    password: string;

    @Column({default: 'user'})
    rol: string;

    @Column({default: 'Y'})
    active: string;

    @DeleteDateColumn()
    deletedAt:Date;

}

