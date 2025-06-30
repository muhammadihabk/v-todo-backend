import express from 'express';
import authController from './components/auth/auth.controller';
import passport from 'passport';
import { handlePassportErrors } from './config/auth/passport';
import cookieParser from './common/middlewares/cookie-parser';
import todoController from './components/todo/todo.controller';

const app = express();

app.use(express.json());
app.use(cookieParser);
app.use('/auth', authController);
app.use(passport.authenticate('jwt', { session: false }), handlePassportErrors);
app.use('/todo', todoController);

export default app;
