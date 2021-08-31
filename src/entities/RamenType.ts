import { Entity, Column, OneToMany } from "typeorm";
import { RamenShop } from "./index";
import Model from "./Model";

@Entity({ name: "ramentype" })
export class RamenType extends Model {
  @Column()
  description: string;

  @OneToMany(() => RamenShop, (ramenshop) => ramenshop.type)
  ramenshops: RamenShop[];
}

export default RamenType;
