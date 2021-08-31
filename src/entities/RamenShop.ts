import { Entity, Column, ManyToOne } from "typeorm";
import { RamenType } from "./index";
import Model from "./Model";

@Entity({ name: "ramenshop" })
export class RamenShop extends Model {
  @Column()
  location: string;

  @ManyToOne(() => RamenType) //, (ramentype) => ramentype.ramenshops
  type: RamenType;
}

export default RamenShop;
