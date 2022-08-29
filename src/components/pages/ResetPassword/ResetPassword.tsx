import React from 'react'
import { resetPassword } from '../../../services'
import { ResetPasswordTemplate } from '../../templates'

function ResetPassword() {

    const _resetPassword = (email: any, password: any) => {
        resetPassword({ email: email, password: password }).then((res) => console.log(res))
    }
    return (
        <ResetPasswordTemplate _resetPassword={_resetPassword} />
    )
}

export default ResetPassword