import { RequestMethods } from "../../enums";
import request from "../../utils/axiosInstace";

export const getUserRoles = async () => {
    try {
        const response = await request(RequestMethods.GET, 'user-role')
        return response;
    } catch (e) {
        console.log(e)
    }
}
