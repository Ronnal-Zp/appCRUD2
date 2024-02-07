import { UserI } from "../interfaces/User";
import User from "../models/User";


export const validateNoExistUserByEmail = async (email ='') => {
    const user = await User.findOne<UserI>({ where: { email } });

    if(!user) {
        throw new Error(`No existe un usuario asociado al email: ${email}`);
    }
}


export const validateExistUserById = async (id ='') => {
    const user = await User.findOne<UserI>({ where: { id: id } });

    if(!user) {
        throw new Error(`No existe un usuario asociado al email: ${id}`);
    }
}


export const validateExistUserByEmail = async (email ='') => {
    const user = await User.findOne<UserI>({ where: { email } });

    if(user) {
        throw new Error(`Existe un usuario asociado al email: ${email}`);
    }
}