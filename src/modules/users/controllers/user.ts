import { Request, Response } from "express";
import User from "../../models/User";
import { encryptPassword } from "../helpers/encryptPassword";


export const getUsers = async (req: Request, res: Response) => {

    try {
        const users = await User.findAll();
    
        return res.json({
            msg: 'OK',
            data: users
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Error en el servidor',
            erro: error
        })
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
        return res.status(500).json({
            msg: 'Error en el servidor',
            erro: error
        })
    }
}


export const updateUser = async (req: Request, res: Response) => {
    const { email, state, firstName, lastName } = req.body;
    const { id } = req.params;
   
    const user = await User.update({ email, state, firstName, lastName }, {
        where: {
            id: id
        }
    });

    return res.json({
        msg: "OK",
        data: user
    })

}
