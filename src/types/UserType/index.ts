export interface UserType {
    _id?: number | string;
    name: string;
    surname?: string;
    roleId?: string;
    email?: string;
    password?: string;
    userRoleName?: string;
}