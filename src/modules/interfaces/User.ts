import { Model } from "sequelize";

export interface UserI extends Model {
    id?: string,
    firstName: string,
    lastName: string | null,
    email: string,
    password: string,
    token: string,
    state: number,
    image?: string,
}