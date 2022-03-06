import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
  @PrimaryColumn()
  id: string;

  @Column("varchar")
  name: string;

  @Column("varchar")
  username: string;

  @Column("varchar")
  email: string;

  @Column("varchar")
  password: string;

  @Column("varchar")
  driver_license: string;

  @Column("boolean")
  isAdmin: boolean;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { User };
