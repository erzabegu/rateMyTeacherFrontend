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

export const getProfessorByName = async (param: any) => {
    try {
        return await request(RequestMethods.GET, `professors/byName/${param}`, null)
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

export const getById = async (params: any) => {
    try {
        return await request(RequestMethods.GET, `professors/${params}`, null)
    }
    catch (e) {
        return e
    }
}

export const showResults = async (data: any) => {
    try {
        return await request(RequestMethods.GET, `professors/results/${data}`, null)
    }
    catch (e) {
        return e
    }
}