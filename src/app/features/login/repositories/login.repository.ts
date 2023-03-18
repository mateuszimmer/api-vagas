import { DataBaseConnection } from '../../../../main/database/typeorm.connection';
import { User } from '../../../models/user.model';
import { UserEntity } from '../../../shared/entities/user.entity';

export class LoginRepository {
    private repository = DataBaseConnection.connection.getRepository(UserEntity);

    public async checkLogin(username: string, senha: string) {
        const user = await this.repository.findOneBy({
            username,
            senha,
        });

        if (!user) {
            return null;
        }
        return this.mapEntityToModel(user);
    }

    private mapEntityToModel(entity: UserEntity) {
        return User.create(
            entity.id,
            entity.nome,
            entity.username,
            entity.senha,
            entity.tipo,
            entity.nomeEmpresa
        );
    }
}
