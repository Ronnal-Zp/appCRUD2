import { Request, Response } from "express";
import User from "../../models/User";
import { encryptPassword } from "../helpers/encryptPassword";
import { QueryParams } from "../../interfaces/QueryParams";


export const getUsers = async (req: Request, res: Response) => {

    let { limit, offset } = req.query as QueryParams;
    
    if(!limit)
        limit = '10';
   
    if(!offset)
        offset = '0';



    try {
        const users = await User.findAll({limit: Number(limit), offset: Number(offset)});
        const count = await User.count();
    
        return res.json({
            msg: 'OK',
            data: users,
            total: count
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

        await User.update({ email, state, firstName, lastName }, {
            where: {
                image: user.id
            }
        });

        
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
   
    await User.update({ email, state, firstName, lastName }, {
        where: {
            id: id
        }
    });


    const user = await User.findByPk( id );

    return res.json({
        msg: "OK",
        data: user
    })

}



export const deleteUser = async (req: Request, res: Response) => {

    const { id } = req.params;

    await User.update({ state: 0}, {
        where: {
            id: id
        }
    });

    return res.json({
        msg: "OK",
    })
}
