export type Admin = {
    email: string,
    password: string
}

export type Users = {
    id: number,
    name: string,
    image: string,
    email: string,
    password: string,
    confirmPassword: string,
    created_at: string,
    address: string,
    status: number
}
export interface Account{
    id: number,
    username: string,
    email: string,
    password: string,
    confirmPassword: string
}