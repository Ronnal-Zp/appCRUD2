import { Request, Response } from "express";
import { comparePassword, encryptPassword } from "../../users/helpers/encryptPassword";
import { generateJWT } from "../../helpers/generateJWT";
import User from "./../../models/User";
import { setConfigMailer } from "../../helpers/mailer";

export const sigin = async(req: Request, res: Response) => {
    try {
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
        }); 
    } catch (error) {
        return res.status(500).json({
            msg: 'Error en el servidor',
            error: error
        })
    }

}


export const register = async(req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, password }  = req.body;
        const state = 1;

        // const passwordEncrypt = encryptPassword(password);
        // const user = await User.create({ firstName, lastName, email, state, password: passwordEncrypt });
        
        const transporter = await setConfigMailer();


        transporter.verify(function (error, success) {
            if (error) {
              console.log(error);
            } else {
              console.log("Server is ready to take our messages");
            }
          });


        return res.json({
            msg: 'OK',
            data: ''
        });

    } catch (error) {
        return res.status(500).json({
            msg: 'Error en el servidor',
            error: error
        })
    }
}