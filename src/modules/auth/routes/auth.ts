import express from "express";
import { check } from "express-validator";
import { validateFields } from "./../../middlewares/validateFields";
import { validateNoExistUserByEmail } from "../../helpers/dbValidators";
import { sigin } from "../controllers/auth";

const router = express.Router();


router.post('/sigin', [
    check('password', 'Se requiere el password.').not().isEmpty(),
    check('email', 'Se requiere el email.').not().isEmpty(),
    check('email').custom( validateNoExistUserByEmail ),
    validateFields
], sigin);


// route.post('/register')



export default router;

