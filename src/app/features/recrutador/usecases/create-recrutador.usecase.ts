import { Recrutador } from '../../../models/recrutador.model';
import { CacheRepository } from '../../../shared/database/repositories/cache.repository';
import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';

interface CreateRecrutadorDTO {
    username: string;
    senha: string;
    nome: string;
    nomeEmpresa: string;
}

export class CreateRecrutadorUseCase {
    constructor(private repository: UsuarioRepository) {}

    public async execute(data: CreateRecrutadorDTO) {
        const cacheRepository = new CacheRepository();

        cacheRepository.del('LIST_RECRUTADOR')

        const recrutador = new Recrutador(data.nome, data.username, data.senha, data.nomeEmpresa);

        const result = await this.repository.criaUsuario(recrutador);

        // PARA O TRABALHO FINAL
        // const listaRecrutadores = await cacheRepository.get('LIST_RECRUTADOR') ?? [];
        // listaRecrutadores.push(recrutador);
        // await cacheRepository.set('LIST_RECRUTADOR', listaRecrutadores)
        return result.toJson();
    }
}