import axios from "axios";
import React, {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import {forgotPassword, login} from "../../../services/Users/UsersService";
import {LoginTemplate} from "../../templates";
import {injectStyle} from "react-toastify/dist/inject-style";
import {useNavigate} from "react-router-dom";
import {setLocalStorageItem} from "../../../utils/services";
import {useDispatch} from "react-redux";
import {setIsLoggedIn, setUser} from "../../../store/slices/user.slice";

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (typeof window !== "undefined") {
        injectStyle();
    }

    const _login = (data: any) => {
        if (!data?.email && !data.password) {
            if (!data?.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                toast.warning("Invalid email")
            } else if (data?.password.length < 6) {
                toast.warning("Pasword must be at least 6 characters")
            } else if (data?.email && data?.password) {
                login(data).then((response: any) => {
                    if (response?.response?.data?.message === "invalid credentials") {
                        toast.dark("Invalid credentials");
                    } else if (response?.statusText === "Created") {
                        dispatch(setUser(response?.data?.user[0]))
                        dispatch(setIsLoggedIn(true))
                        toast.success("Successfuly logged in");
                        setLocalStorageItem('token', response.data.jwt)
                        navigate('/')
                    }
                }).catch((e) => console.log(e))
            }
        } else {
            toast.warning("All fields are required!")
        }
    }

    const _forgotPassword = (data: any) => {
        forgotPassword(data).then((res: any) => console.log(res))
    }

    return <><ToastContainer/><LoginTemplate _login={_login} _forgotPassword={_forgotPassword}/></>
}


export default Login