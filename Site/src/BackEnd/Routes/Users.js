import express from 'express';
import { UserController } from '../controllers/userController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rotas públicas
router.post('/register', UserController.register);

// Rotas protegidas
router.get('/profile', authenticate, UserController.getUserProfile);

export default router;