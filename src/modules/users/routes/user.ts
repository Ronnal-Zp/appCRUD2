import express from "express";
import { check } from "express-validator";
import { getUsers, createUser, updateUser } from "./../controllers/user"
import { validateFields } from "../../middlewares/validateFields";
import { validateExistUserByEmail, validateExistUserById } from "../../helpers/dbValidators";
import { validateJWT } from "../../middlewares/validateJWT";

const router = express.Router();


router.get("/users", getUsers);

router.post("/user", [
    check('email', 'Email invalido').isEmail(),
    check('firstName', 'El nombre es requerido').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    check('password', 'El password debe tener al menos 8 caracteres').isLength({ min: 8 }),
    validateFields
], createUser);


router.put("/user/:id", [
    validateJWT,
    check('email', 'Email invalido').optional().isEmail(),
    check('email',).custom( validateExistUserByEmail ),
    check('id', 'El id es requerido.').not().isEmpty(),
    check('id').custom( validateExistUserById ),
    check('state', 'El estado debe ser un numero').isInt(),
    validateFields
], updateUser);


export default router;
