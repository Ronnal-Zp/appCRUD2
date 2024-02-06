import { Request, Response } from "express";
import { comparePassword } from "../../users/helpers/encryptPassword";
import { generateJWT } from "../../helpers/generateJWT";
import User from "./../../models/User";

export const sigin = async(req: Request, res: Response) => {
    const { email, password } = req.body;
    const user = await User.findOne<any>({ where: { email } });

    
    const result = comparePassword(password, user.password);

    if(!result) {
        return res.json({
            msg: "Credenciales invalidas"
        })
    }
    
    
    const token = await generateJWT(user.id) 

    res.json({
        msg: 'OK',
        token,
        email,
    })


}