import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({name: "ramenshop"})
export class RamenShop {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    location: string;

    @Column()
    type: string;


}


export default RamenShop;