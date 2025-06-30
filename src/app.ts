import express from 'express';
import authController from './components/auth/auth.controller';

const app = express();

app.use(express.json());
app.use('/auth', authController);

export default app;
