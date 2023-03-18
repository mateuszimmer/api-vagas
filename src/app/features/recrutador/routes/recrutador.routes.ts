import { createRecrutadorValidator } from './../validators/create-recrutador.validator';
import { RecrutadorController } from './../controllers/recrutador.controller';
import { Router } from 'express';
import { createUserValidator } from '../../usuario/validators/createUser.validator';
import { checkDuplicateUserValidator } from '../../usuario/validators/checkDuplicateUser.validator';

export const recrutadorRoutes = Router();

recrutadorRoutes.post(
    '/',
    [
        createUserValidator,
        createRecrutadorValidator,
        checkDuplicateUserValidator,
    ],
    new RecrutadorController().create
);

recrutadorRoutes.get(
    '/',
    new RecrutadorController().list
)
