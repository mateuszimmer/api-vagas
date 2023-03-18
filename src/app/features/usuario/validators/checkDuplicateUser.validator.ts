import { NextFunction, Request, Response } from 'express';
import { HttpHelper } from '../../../shared/util/http.helper';
import { UsuarioRepository } from '../repositories/usuario.repository';
import { FindUsuarioByUsername } from '../usecases/findUsuarioByUsername.usecase';

export const checkDuplicateUserValidator = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { username } = req.body;
        const usecase = new FindUsuarioByUsername(new UsuarioRepository());
        const result = await usecase.execute(username);
        if (!result) {
            return next();
        }
        return HttpHelper.badRequest(res, `${username} já cadastrado`);
    } catch (error: any) {
        return HttpHelper.serverError(res, error.toString());
    }
};
