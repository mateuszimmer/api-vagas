import { Entity, Column } from "typeorm";
import { EntityBase } from "./entity.base";
import { TipoUser } from "../../models/user.model";

@Entity({ name: "user" })
export class UserEntity extends EntityBase {
  @Column()
  username!: string;
  @Column()
  senha!: string;
  @Column()
  nome!: string;
  @Column({ name: "nome_empresa" })
  nomeEmpresa!: string;
  @Column()
  tipo!: string;
}
