import { RequestMethods } from "../../enums";
import request from "../../utils/axiosInstace";

export const getUsers = async () => {
    try {
        return await request(RequestMethods.GET, 'users')
    } catch (e) {
        console.log(e)
    }
}

export const addUsers = async (data: any) => {
    try {
        return await request(RequestMethods.POST, 'users', data)
    }
    catch (e) {
        console.log(e)
    }
}

export const modifyUsers = async (params: any, data: any) => {
    console.log(params, data)
    try {
        return await request(RequestMethods.PUT, `users/${params}`, data);
    }
    catch (e) {
        console.log(e)
    }
}

export const deleteUsers = async (params: any) => {
    try {
        return await request(RequestMethods.DELETE, 'users', null, params);
    }
    catch (e) {
        console.log(e)
    }
}

export const login = async (data: any) => {
    try {
        return await request(RequestMethods.POST, 'users/login', data)
    }
    catch (e) {
        return e
    }
}

export const register = async (data: any) => {
    try {
        return await request(RequestMethods.POST, 'signup', data)
    }
    catch (e) {
        return e
    }
}