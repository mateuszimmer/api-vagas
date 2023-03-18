import { Candidato } from '../../../models/candidato.model';
import { CacheRepository } from '../../../shared/database/repositories/cache.repository';
import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';

interface CreateCandidatoDTO {
    username: string;
    senha: string;
    nome: string;
}

export class CreateCandidatoUseCase {
    constructor(private repository: UsuarioRepository) {}

    public async execute(data: CreateCandidatoDTO) {

        const cacheRepository = new CacheRepository()
        cacheRepository.del('LIST_CANDIDATO')

        const candidato = new Candidato(data.nome, data.username, data.senha);
        const result = await this.repository.criaUsuario(candidato);

        return result.toJson();
    }
}
