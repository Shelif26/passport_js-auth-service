import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user-datas")
export class User {
  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number | undefined;

  @Column({
    type: "varchar",
    nullable: false,
  })
  email: string | undefined;

  @Column({
    type: "varchar",
    nullable: false,
  })
  salt: string | undefined;

  @Column({
    type: "text",
    nullable: false,
  })
  hash: string | undefined;
}
