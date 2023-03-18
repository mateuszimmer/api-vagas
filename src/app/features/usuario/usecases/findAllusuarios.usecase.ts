import { CacheRepository } from "../../../shared/database/repositories/cache.repository";
import { UsuarioRepository } from "../repositories/usuario.repository";

export class FindAllUsuarioUseCase {
  constructor(private repository: UsuarioRepository) {}

  public async execute() {
    const cacheRepository = new CacheRepository();

    const cache = await cacheRepository.get("LIST_USERS");

    if (cache) {
      return cache;
    }

    const result = await this.repository.getAll();

    if (!result) {
      return null;
    }

    await cacheRepository.setEX("LIST_USERS", result, 60);

    return result;
  }
}
