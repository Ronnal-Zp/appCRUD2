import { Request, Response } from "express";
import User from "./../models/User";
import { encryptPassword } from "../helpers/encryptPassword";


export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await User.findAll();
    
        return res.json({
            msg: 'OK',
            data: users
        })
    } catch (error) {
        console.log(error)
    }
}



export const createUser = async (req: Request, res: Response) => {

    try {
        const { firstName, lastName, email, password }  = req.body;
        const state = 1;

        const passwordEncrypt = encryptPassword(password);
        const user = await User.create({ firstName, lastName, email, state, password: passwordEncrypt });
        
        return res.json({
            msg: 'OK',
            data: user
        });

    } catch (error) {
        console.log(error)
    }
    
}