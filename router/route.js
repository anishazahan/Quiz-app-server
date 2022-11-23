import { Router } from "express";
const router = Router();

////---------import controller--------

import * as controller from '../controller/controller.js';




////---------questions routes--------

router.get('/questions',controller.getQuestions)



export default router;