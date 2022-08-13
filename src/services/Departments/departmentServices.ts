import { RequestMethods } from "../../enums";
import request from "../../utils/axiosInstace";

export const getDepartments = async () => {
    try {
        return await request(RequestMethods.GET, 'departments')
    } catch (e) {
        console.log(e)
    }
}

export const addDepartments = async (data: any) => {
    try {
        return await request(RequestMethods.POST, 'departments', data)
    }
    catch (e) {
        console.log(e)
    }
}

export const modifyDepartments = async (params: any, data: any) => {
    try {
        return await request(RequestMethods.PUT, `departments/${params}`, data);
    }
    catch (e) {
        console.log(e)
    }
}

export const deleteDepartments = async (params: any) => {
    try {
        return await request(RequestMethods.DELETE, 'departments', null, params);
    }
    catch (e) {
        console.log(e)
    }
}