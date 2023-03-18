import { Candidato } from '../../../models/candidato.model';
import { CacheRepository } from '../../../shared/database/repositories/cache.repository';
import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';
import { TipoUser } from '../../../models/user.model';

export class ListCandidatoUseCase {
    constructor(private repository: UsuarioRepository) {}

    public async execute() {
        const cacheRepository = new CacheRepository();
        const cache = await cacheRepository.get('LIST_CANDIDATO');
        if (cache) {
            return {
                data: cache,
                cache: true,
            }
        } 
        
        const result = await this.repository.getByType(TipoUser.Candidato)

        await cacheRepository.setEX('LIST_CANDIDATO', result, 300)

        return {
            data: result,
            cache: false,
        }
    }
}
