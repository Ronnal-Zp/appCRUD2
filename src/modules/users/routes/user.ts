import express from "express";
import { check } from "express-validator";
import { getUsers, createUser } from "./../controllers/user"
import { validateFields } from "./../middleware/validateFields";

const router = express.Router();


router.get("/users", getUsers);

router.post("/user", [
    check('email', 'Email invalido').isEmail(),
    check('firstName', 'El nombre es requerido').not().isEmpty(),
    check('password', 'El password es requerido').not().isEmpty(),
    check('password', 'El password debe tener al menos 8 caracteres').isLength({ min: 8 }),
    validateFields
], createUser);


export default router;
