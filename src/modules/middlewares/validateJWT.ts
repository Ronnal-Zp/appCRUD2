import { Request, Response, NextFunction, response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { SECRETKEY_ENCRYPT } from "../../environments/env";
import { JsonWebToken } from "../interfaces/JsonWebToken";
import { UserI } from "../interfaces/User";

export const validateJWT = async (req:Request, res:Response, next:NextFunction) => {
    const token = req.header('Authorization');

    if( !token ) {
        return res.status(401).json({
            msg: 'Debe proporcionar el token.'
        })
    }


    try {
        const { uid } = <JsonWebToken>jwt.verify(token, SECRETKEY_ENCRYPT!);
        const user = await User.findByPk<UserI>( uid );
        
        if( !user ) {
            return res.status(401).json({
              msg: 'No existe usuario.'
            });  
        }


        if( user.state != 1 ) {
          return res.status(401).json({
            msg: 'El usuario se encuentra eliminado.'
          });  
        }

        next();
    } catch (error) {
        console.log(error);

        return res.status(401).json({
            msg: 'Token inválido.'
        })
    }

}


export const getIdUserFromToken = async (req:Request, res = response) => {
    const token = req.header('Authorization');

    if( !token ) {
        return res.status(401).json({
            msg: 'Debe proporcionar el token.'
        })
    }

    const { uid } = <JsonWebToken>jwt.verify(token, SECRETKEY_ENCRYPT!);
    return uid;
}
