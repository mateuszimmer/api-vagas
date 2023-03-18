import { NextFunction, Request, Response } from 'express';
import { HttpHelper } from '../../../shared/util/http.helper';

export const createUserValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { nome, username, senha } = req.body;

        if (!nome) return HttpHelper.badRequest(res, 'Nome not provided', 400);
        if (!username) return HttpHelper.badRequest(res, 'Username not provided', 400);
        if (!senha) return HttpHelper.badRequest(res, 'Senha not provided', 400);

        return next();
    } catch (error: any) {
        return HttpHelper.serverError(res, error.toString());
    }
};
