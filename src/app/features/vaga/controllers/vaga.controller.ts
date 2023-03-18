import { HttpHelper } from './../../../shared/util/http.helper';
import { CreateVagaUseCase } from './../usecases/create-vaga.usecase';
import { Request, Response } from 'express';
import { VagaRepository } from '../repositories/vaga.repository';
import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';

export class VagaController {
    public async create(req: Request, res: Response) {
        try {
            const recrutador = JSON.parse(req.headers['user']?.toString() ?? '{}');

            const usecase = new CreateVagaUseCase(new VagaRepository(), new UsuarioRepository());
            const result = await usecase.execute({ ...req.body, idRecrutador: recrutador.id });

            if (!result) {
                return HttpHelper.badRequest(res, 'Erro ao criar vaga: recrutador inválido');
            }

            return HttpHelper.sucess(res, result, 'Vaga criada com sucesso', 201);
        } catch (error: any) {
            return HttpHelper.serverError(res, error.toString());
        }
    }
}
