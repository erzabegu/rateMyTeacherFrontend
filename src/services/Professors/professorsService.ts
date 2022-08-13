import { RequestMethods } from "../../enums";
import request from "../../utils/axiosInstace";

export const getProfessors = async () => {
    try {
        return await request(RequestMethods.GET, 'professors')
    } catch (e) {
        console.log(e)
    }
}

export const addProfessors = async (data: any) => {
    try {
        return await request(RequestMethods.POST, 'professors', data)
    }
    catch (e) {
        console.log(e)
    }
}

export const modifyProfessors = async (params: any, data: any) => {
    console.log('hi')
    try {
        return await request(RequestMethods.PUT, `professors/${params}`, data);
    }
    catch (e) {
        console.log(e)
    }
}

export const deleteProfessors = async (params: any) => {
    try {
        return await request(RequestMethods.DELETE, 'professors', null, params);
    }
    catch (e) {
        console.log(e)
    }
}