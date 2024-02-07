import express from "express";
import { check } from "express-validator";
import { validateFields } from "./../../middlewares/validateFields";
import { validateExistUserByEmail, validateNoExistUserByEmail } from "../../helpers/dbValidators";
import { sigin, register } from "../controllers/auth";

const router = express.Router();


router.post('/sigin', [
    check('password', 'Se requiere el password.').not().isEmpty(),
    check('email', 'Se requiere el email.').not().isEmpty(),
    check('email').custom( validateNoExistUserByEmail ),
    validateFields
], sigin);


router.post('/register', [
    check('email', 'Se requiere el email.').not().isEmpty(),
    check('email', 'Email invalido').isEmail(),
    check('email').custom( validateExistUserByEmail ),
    check('firstName', 'El nombre es requerido').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    check('password', 'El password debe tener al menos 8 caracteres').isLength({ min: 8 }),
    validateFields
], register)



export default router;

