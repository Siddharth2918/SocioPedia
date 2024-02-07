import { login } from '../controllers/auth';

const express = require('express')

const authRoutes = express.Router();

authRoutes.post('/login', login);

export default authRoutes;