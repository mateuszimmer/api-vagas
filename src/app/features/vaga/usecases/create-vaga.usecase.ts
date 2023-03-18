import { Recrutador } from "./../../../models/recrutrador.model";
import { FindUserUseCase } from "./../../user/usecases/find-user.usecase";
import { VagaRepository } from "./../repositories/vaga.repository";
import { Vaga } from "./../../../models/vaga.model";
import { UserRepository } from "../../user/repositories/user.repository";
import { TipoUser } from "../../../models/user.model";
interface CreateVagaDTO {
    descricao: string;
    empresa: string;
    dtLimite: Date;
    ativo: boolean;
    idRecrutador: string;
    maxCandidatos?: number;
}

export class CreateVagaUseCase {
    constructor(private repository: VagaRepository, private userRepository: UserRepository) {}

    public async execute(data: CreateVagaDTO) {
        const recrutador = await this.userRepository.get(data.idRecrutador);

        if (!recrutador) {
            return null;
        }

        if (recrutador.tipo !== TipoUser.Recrutador) {
            return null;
        }

        console.log(recrutador);

        const vaga = new Vaga(data.descricao, data.empresa, data.dtLimite, data.ativo, recrutador, data.maxCandidatos);
        console.log(vaga);
        const result = await this.repository.create(vaga);
        console.log(result);

        return result.toJson();
    }
}
