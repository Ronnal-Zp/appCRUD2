import { Model } from "sequelize";

export interface UserI extends Model {
    firstName: string,
    lastName: string | null,
    email: string,
    password: string,
    token: string,
    state: number
}