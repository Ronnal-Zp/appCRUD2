import User from "../models/User";


export const validateExistUserByEmail = async (email ='') => {
    const user = await User.findOne<any>({ where: { email } });

    if(!user) {
        throw new Error(`No existe un usuario asociado al email: ${email}`);
    }
}


export const validateExistUserById = async (id ='') => {
    const user = await User.findOne<any>({ where: { id: id } });

    if(!user) {
        throw new Error(`No existe un usuario asociado al email: ${id}`);
    }
}