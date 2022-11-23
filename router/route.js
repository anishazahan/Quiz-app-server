import { Router } from "express";
const router = Router();

////---------import controller--------

import * as controller from '../controller/controller.js';




////---------questions routes--------


router.route('/questions')
       .get(controller.getQuestions)//---get requst
       .post(controller.insertQuestions) //----post requst
       .delete(controller.dropQuestions)//----delete requst

       router.route('/result')
       .get(controller.getResult)
       .post(controller.storeResult)
       .delete(controller.dropResult)


export default router;