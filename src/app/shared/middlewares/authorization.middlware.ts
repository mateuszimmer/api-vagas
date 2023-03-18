import { NextFunction, Request, Response } from "express";
import { HttpHelper } from "../util/http.helper";
import * as jwt from "jsonwebtoken";
import { appEnv } from "../../envs/app.env";

export function authorizationMiddleware(req: any, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return HttpHelper.unauthorized(res, "Token não informado");
  }

  // Bearer sdflsdkfsladfk
  const token = authorization.split(" ")[1];

  // decodificar o token
  try {
    const decoded = jwt.verify(token, appEnv.secret!);
    req.user = decoded;
  } catch (error) {
    console.log(error);
    return HttpHelper.unauthorized(res, "Token é inválido");
  }

  next();
}
