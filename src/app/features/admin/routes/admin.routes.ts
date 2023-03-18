import { Router } from 'express';
import { AdminController } from '../controllers/admin.controller';
import { createUserValidator } from '../../usuario/validators/createUser.validator';
import { checkDuplicateUserValidator } from '../../usuario/validators/checkDuplicateUser.validator';

const adminRoutes = Router();

adminRoutes.post(
    '/',
    [createUserValidator, checkDuplicateUserValidator],
    new AdminController().create
);
adminRoutes.get('/', new AdminController().listAll);

export { adminRoutes };
