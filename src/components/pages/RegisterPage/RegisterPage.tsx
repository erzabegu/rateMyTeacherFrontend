import { useEffect } from 'react'
import { register } from '../../../services/Users/UsersService'
import { RegisterTemplate } from '../../templates'

const RegisterPage = () => {

    const _register = (data: any) => {
        register(data).then((res: any) => console.log(res))
    }

    return <RegisterTemplate _register={_register} />
}

export default RegisterPage