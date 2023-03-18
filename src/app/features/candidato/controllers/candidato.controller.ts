import { CreateCandidatoUseCase } from '../usecases/create-candidato.usecase';
import { Request, Response } from 'express';

import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';
import { HttpHelper } from '../../../shared/util/http.helper';
import { ListCandidatoUseCase } from '../usecases/list-candidato.usecase';

export class CandidatoController {
    public async create(req: Request, res: Response) {
        try {
            const usecase = new CreateCandidatoUseCase(new UsuarioRepository());
            const result = await usecase.execute(req.body);

            return HttpHelper.sucess(res, result, 'Candidato criado com sucesso.');
        } catch (error: any) {
            return HttpHelper.serverError(res, error.toString());
        };
    };

    public async list(_: Request, res: Response) {
        try{
            const usecase = new ListCandidatoUseCase(new UsuarioRepository());
            const result = await usecase.execute();

            return HttpHelper.sucess(res, result.data, 'Lista de candidatos', 200, result.cache);

        } catch(error: any) {
            return HttpHelper.serverError(res, error.toString());
        };
    }
}
