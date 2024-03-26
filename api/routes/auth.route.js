import express from 'express';
import { signup } from '../controllers/auth.controller.js';

const router = express.Router(); // Create an Express router

router.post('/signup', signup); // Define the signup route

export default router; // Export the router
