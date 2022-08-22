import axios from "axios";
import React, { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { login } from "../../../services/Users/UsersService";
import { LoginTemplate } from "../../templates";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useNavigate } from "react-router-dom";
import { setLocalStorageItem } from "../../../utils/services";

const Login = () => {

    const navigate = useNavigate();

    if (typeof window !== "undefined") {
        injectStyle();
    }
    const _login = (data: any) => {
        login(data).then((response: any) => {
            if (response?.response?.data?.message === "invalid credentials") {
                toast.dark("Invalid credentials");
            }
            else if (response?.statusText === "Created") {
                toast.dark("Successfuly logged in");
                setLocalStorageItem('token', response.data.jwt)
                navigate('/')
            }
        }).catch((e) => console.log(e))
    }

    return <><ToastContainer /><LoginTemplate _login={_login} /></>
}


export default Login