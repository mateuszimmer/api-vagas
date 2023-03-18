import { Recrutador } from '../../../models/recrutador.model';
import { TipoUser } from '../../../models/user.model';
import { CacheRepository } from '../../../shared/database/repositories/cache.repository';
import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';

export class ListRecrutadorUseCase {
    constructor(private repository: UsuarioRepository) {}

    public async execute() {
        const cacheRepository = new CacheRepository();
        const cache = await cacheRepository.get('LIST_RECRUTADOR');
        if (cache) {
            return {
                data: cache,
                cache: true,
            }
        };

        const result = await this.repository.getByType(TipoUser.Recrutador);

        await cacheRepository.setEX('LIST_RECRUTADOR', result, 300);

        return {
            data: result,
            cache: false,
        };
    }
}