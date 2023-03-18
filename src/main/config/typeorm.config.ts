import { DataSource } from 'typeorm';
import { appEnv } from '../../app/envs/app.env';
import { candidatoVagaEntity } from '../../app/shared/entities/candidatoVaga.entity';
import { EntityBase } from '../../app/shared/entities/entity.base';
import { UserEntity } from '../../app/shared/entities/user.entity';
import { vagaEntity } from '../../app/shared/entities/vaga.entity';
import { CreateTableUser1678145531920 } from '../../app/shared/migrations/1678145531920-CreateTableUser';
import { CreateTableVaga1678145600307 } from '../../app/shared/migrations/1678145600307-CreateTableVaga';
import { CreateTableCandidatoVaga1678148446733 } from '../../app/shared/migrations/1678148446733-CreateTableCandidatoVaga';

export default new DataSource({
    type: 'postgres',
    url: appEnv.dbUrl,
    //schema: 'api-vagas',
    entities: [
        EntityBase,
        UserEntity,
        vagaEntity,
        candidatoVagaEntity
    ],
    migrations: [
        CreateTableUser1678145531920,
        CreateTableCandidatoVaga1678148446733,
        CreateTableVaga1678145600307
    ],
    synchronize: false,
    ssl: {
        rejectUnauthorized: false,
    },
});
