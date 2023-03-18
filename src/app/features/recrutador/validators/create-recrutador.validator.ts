import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "./../../../shared/util/http.helper";
// import { serverError } from "../../../shared/util/http.helper";

export const createRecrutadorValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { nomeEmpresa } = req.body;

        if (!nomeEmpresa) {
            return HttpHelper.badRequest(res, "Nome da empresa não foi informado");
        }

        next();
    } catch (error: any) {
        return HttpHelper.serverError(res, error.toString());
    }
};
