import { PrimaryGeneratedColumn, Column} from "typeorm";

export abstract class Model {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
}

export default Model;
