import bcrypt from "bcrypt";

export function encryptPassword(password:string, saltRounds:number = 10) {
    const salt = bcrypt.genSaltSync(saltRounds);
    console.log(password, 'sss')
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}


export function comparePassword(password:string, hash:string) {
    return bcrypt.compareSync(password, hash);
}