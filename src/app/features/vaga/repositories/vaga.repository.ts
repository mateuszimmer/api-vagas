import { Recrutador } from './../../../models/recrutrador.model';

import { Vaga } from '../../../models/vaga.model';
import { DataBaseConnection } from '../../../../main/database/typeorm.connection';
import { vagaEntity } from '../../../shared/entities/vaga.entity';

export class VagaRepository {
    private repository = DataBaseConnection.connection.getRepository(vagaEntity);

    public async create(vaga: Vaga) {
        const vagaEntity = this.repository.create({
            id: vaga.id,
            ativo: vaga.ativo,
            descricao: vaga.descricao,
            dtLimite: vaga.dtLimite,
            empresa: vaga.empresa,
            idRecrutador: vaga.recrutador.id,
            maxCandidatos: vaga.maxCandidatos,
        });

        await this.repository.save(vagaEntity);

        const result = await this.repository.findOneBy({
            id: vaga.id,
        });
        console.log(result);

        return this.mapEntityToModel(result!);
    }

    private mapEntityToModel(entity: vagaEntity) {
        const recrutadorEntity = entity.recrutador;
        const recrutador = Recrutador.create(
            recrutadorEntity.id,
            recrutadorEntity.nome,
            recrutadorEntity.username,
            recrutadorEntity.senha,
            recrutadorEntity.tipo,
            recrutadorEntity.nomeEmpresa
        );

        return Vaga.create(
            entity.id,
            entity.descricao,
            entity.empresa,
            entity.dtLimite,
            entity.ativo,
            recrutador,
            entity.maxCandidatos
        );
    }
}
