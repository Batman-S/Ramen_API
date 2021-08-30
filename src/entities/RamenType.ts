import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {RamenShop} from "./index"

@Entity({name: "ramentype"})
export class RamenType {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => RamenShop, (ramenshop) => ramenshop.type)
    ramenshops: RamenShop[];


}


export default RamenType;