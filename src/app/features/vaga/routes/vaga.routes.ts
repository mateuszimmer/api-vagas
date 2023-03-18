import { checkLoginRecrutadorValidator } from "./../../recrutador/validators/check-login-recrutador.validator";
import { checkLoginValidator } from "./../../login/validators/check-login.validator";
import { VagaController } from "./../controllers/vaga.controller";
import { Router } from "express";
import { createVagaValidator } from "../validators/create-vaga.validator";

export const vagaRoutes = () => {
    const router = Router();

    router.post(
        "/",
        [checkLoginValidator, checkLoginRecrutadorValidator, createVagaValidator],
        new VagaController().create
    );

    return router;
};
