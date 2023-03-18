import { badRequestError } from "./../../../shared/util/http.helper";
import { NextFunction, Request, Response } from "express";
import { serverError } from "../../../shared/util/http.helper";

export const createVagaValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { descricao, empresa, dtLimite, ativo } = req.body;

        if (!descricao) {
            return badRequestError(res, "descricao nao foi informada");
        }

        if (!empresa) {
            return badRequestError(res, "empresa nao foi informada");
        }

        if (!dtLimite) {
            return badRequestError(res, "dtLimite nao foi informado");
        }

        if (!ativo) {
            return badRequestError(res, "Indicador de ativo nao foi informado");
        }

        return next();
    } catch (error: any) {
        return serverError(res, error.toString());
    }
};
