import { RequestMethods } from "../../enums";
import request from "../../utils/axiosInstace";

export const getSchools = async () => {
    try {
        const response = await request(RequestMethods.GET, 'schools')
        return response;
    } catch (e) {
        console.log(e)
    }
}

export const getOneSchool = async (params: any) => {
    try {
        return await request(RequestMethods.GET, `schools/${params}`, null)
    }
    catch (e) {
        return e
    }
}

export const addSchool = async (data: any) => {
    try {
        const response = await request(RequestMethods.POST, 'schools', data)
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const modifySchool = async (data: any, params: any) => {
    try {
        const response = await request(RequestMethods.PUT, `schools/${params}`, data);
        return response
    }
    catch (e) {
        console.log(e)
    }
}

export const deleteSchool = async (params: any) => {
    try {
        return await request(RequestMethods.DELETE, `schools/${params}`, null, params);
    }
    catch (e) {
        console.log(e)
    }
}