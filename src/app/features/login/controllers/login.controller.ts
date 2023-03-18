import { Request, Response } from 'express';
import { HttpHelper } from '../../../shared/util/http.helper';
import { UsuarioRepository } from '../../usuario/repositories/usuario.repository';
import { LoginUseCase } from '../usecases/login.usecase';

export class LoginController {
    public async login(req: Request, res: Response) {
        try {
            const useCase = new LoginUseCase(new UsuarioRepository());
            const result = await useCase.execute(req.body);

            if (!result) {
                return HttpHelper.badRequest(res, 'Usuario ou senha invalido!', 403);
            }
            return HttpHelper.sucess(res, result);
        } catch (error: any) {
            return HttpHelper.serverError(res, error.toString());
        }
    }
}
