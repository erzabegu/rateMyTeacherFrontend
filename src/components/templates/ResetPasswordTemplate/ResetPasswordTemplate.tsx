import React, { useState } from 'react'
import { Col, Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { DefaultInput, MyButton } from '../../atoms'
import { Header } from '../../molecules'

interface Props {
    _resetPassword(email: any, password: any): void
}

function ResetPasswordTemplate(props: Props) {
    const [user, setUser] = useState<any>({})
    const { email } = useParams();
    return <>
        <Container fluid className="loginWrapper" style={{ minHeight: '98.5vh' }}>
            <Header register={true} />
            <Col className='mx-auto mt-5' lg={4}  >
                <div className="registerContainer">
                    <Col lg={7} className="mx-auto pt-3 pb-3">
                        <DefaultInput type='password' placeholder='Password' className='mb-3' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        <DefaultInput type='password' placeholder='PasswordConfirm' className='mb-3' onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                        <MyButton title="Register" className="mb-4" style={{ width: '10rem', backgroundColor: '#283779', border: 'none' }} onClick={() => props._resetPassword(email, user?.password)}></MyButton>
                    </Col>
                </div>
            </Col>
        </Container>
    </>
}

export default ResetPasswordTemplate