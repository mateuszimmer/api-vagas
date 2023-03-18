import { Admin } from "../../../models/admin.model";
import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { UsuarioRepository } from "../../usuario/repositories/usuario.repository";

interface CreatedAdminDTO {
  username: string;
  senha: string;
  nome: string;
}

export class CreateAdminUseCase {
  constructor(private repository: UsuarioRepository) {}

  public async execute(data: CreatedAdminDTO) {
    const admin = new Admin(data.nome, data.username, data.senha);

    const cacheRepository = new CacheRepository();
    await cacheRepository.del("LIST_USERS");

    const result = await this.repository.criaUsuario(admin);

    return (result as Admin).toJsonAdmin();
  }
}
