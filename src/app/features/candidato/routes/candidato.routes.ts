import { Router } from 'express';
import { createUserValidator } from '../../usuario/validators/createUser.validator';
import { checkDuplicateUserValidator } from '../../usuario/validators/checkDuplicateUser.validator';
import { CandidatoController } from '../controllers/candidato.controller';

export const candidatoRoutes = Router();

candidatoRoutes.post(
    '/',
    [
        createUserValidator,
        checkDuplicateUserValidator,
    ],
    new CandidatoController().create
)

candidatoRoutes.get(
    '/',
    new CandidatoController().list
)
