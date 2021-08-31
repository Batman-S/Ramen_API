import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import {RamenType} from "./index"

@Entity({ name: "ramenshop" })
export class RamenShop {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  location: string;

  @ManyToOne(() => RamenType) //, (ramentype) => ramentype.ramenshops
  type: RamenType;

  
}

export default RamenShop;
