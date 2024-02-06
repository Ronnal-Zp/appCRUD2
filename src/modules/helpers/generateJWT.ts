import jwt from "jsonwebtoken";
import { SECRETKEY_ENCRYPT } from "../../environments/env";

export const generateJWT = ( uid:string ) => {

    return new Promise((resolve, reject) => {
        const payload = { uid }

        jwt.sign(payload, SECRETKEY_ENCRYPT!, {
            expiresIn: '1h'
        }, (err, token) => {
            if(err) {
                console.log(err);
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        })
    })

}
