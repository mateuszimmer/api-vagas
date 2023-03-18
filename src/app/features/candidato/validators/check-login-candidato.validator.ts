import { HttpHelper } from "./../../../shared/util/http.helper";
import { TipoUser } from "./../../../models/user.model";
import { NextFunction, Request, Response } from "express";

export const checkLoginCandidatoValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = JSON.parse(req.headers["user"]?.toString() ?? "{}");

        if (user.tipo !== TipoUser.Recrutador) {
            return HttpHelper.badRequest(res, "Acesso nao autorizado para este perfil", 405);
        }

        return next();
    } catch (error: any) {
        return HttpHelper.serverError(res, error.toString());
    }
};
