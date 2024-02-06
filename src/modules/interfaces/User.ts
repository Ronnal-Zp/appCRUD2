export interface User {
    firstName: string,
    lastName: string | null,
    email: string,
    password: string,
    token: string,
    state: number
}