import { Router } from 'express';
import { LoginController } from '../controllers/login.controller';

const loginRoutes = Router();

loginRoutes.post('/', new LoginController().login);

export { loginRoutes };
