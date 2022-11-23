import { Router } from "express";
const router = Router();

////---------import controller--------

import * as controller from '../controller/controller.js';




////---------questions routes--------


router.route('/questions')
       .get(controller.getQuestions)//---get requst
       .post(controller.insertQuestions) //----post requst



export default router;