import express from 'express';
import {test} from '../controllers/user.controller.js'

const route = express.Router();

router.get('/test', test
);

export default route;