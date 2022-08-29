import React, { useEffect, useState } from 'react'
import { Container, Col } from 'react-bootstrap'
import { Key, People, PersonPlus, PersonPlusFill } from 'react-bootstrap-icons'
import { DefaultInput, MyButton, SelectInput } from '../../atoms'
import { Header } from '../../molecules'
import './RegisterTemplate.scss'

interface Props {
    _register(data: any): void;
}

const RegisterTemplate = (props: Props) => {
    const [user, setUser] = useState<any>({ userRoleName: 'user' })
    return <>
        <Container fluid className="loginWrapper" style={{ minHeight: '98.5vh' }}>
            <Header register={true} />
            <Col className='mx-auto mt-5' lg={4}  >
                <div className="registerContainer">
                    <PersonPlus height={50} width={50} className="mt-2" />
                    <Col lg={7} className="mx-auto pt-3 pb-3">
                        <DefaultInput type='text' placeholder='Name' className='mb-3' onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        <DefaultInput type='text' placeholder='Surname' className='mb-3' onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        <DefaultInput type='text' placeholder='UserName' className='mb-3' onChange={(e) => setUser({ ...user, userName: e.target.value })} />
                        <DefaultInput type='email' placeholder='E-mail' className='mb-3' onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        <DefaultInput type='password' placeholder='Password' className='mb-3' onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        <MyButton title="Register" className="mb-4" style={{ width: '10rem', backgroundColor: '#283779', border: 'none' }} onClick={() => props._register(user)}></MyButton>
                    </Col>
                </div>
            </Col>
        </Container>
    </>
}

export default RegisterTemplate