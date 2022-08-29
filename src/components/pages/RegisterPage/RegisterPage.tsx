import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { register } from '../../../services/Users/UsersService'
import { RegisterTemplate } from '../../templates'
import { injectStyle } from "react-toastify/dist/inject-style";
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {

    const navigate = useNavigate();
    if (typeof window !== "undefined") {
        injectStyle();
    }

    const _register = (data: any) => {
        if (!data?.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            toast.warning("Invalid email")
        }
        else if (data?.password.length < 6) {
            toast.warning("Password must have more than 6 characters")
        }
        else if (data?.firstName && data?.lastName && data?.userName && data?.password && data?.email) {
            register(data).then((res: any) => {
                console.log(res, 'res.response?.data?.message ')
                if (res.response?.data?.message === "Email has been taken") {
                    toast.warning("Email already exists")
                }
                else if (res?.statusText === "Created") {
                    toast.success("You registered successfuly")
                    // navigate('/login');
                }
            })
        }
        else {
            toast.warning("All fields are mandatory!")
        }
    }

    return <><ToastContainer /> <RegisterTemplate _register={_register} /></>
}

export default RegisterPage