import React, { useState } from 'react'
import { Container, Col, InputGroup, Row } from 'react-bootstrap'
import { Key, People, Person } from 'react-bootstrap-icons'
import { DefaultImage, DefaultInput, MyButton } from '../../atoms'
import Team from '../../../assets/images/team.png'
import './LoginTemplate.scss'
import { Header } from '../../molecules'
import { ToastContainer } from 'react-toastify'

interface Props {
    _login(data: any): void;
}

const LoginTemplate = (props: Props) => {
    const [loginUser, setLoginUser] = useState<any>({})
    return <>
        <Header isLoggedIn={true} isOk={true} />
        <Container fluid className="">
            <Row>
                <Col className="d-flex flex-column">
                    <DefaultImage src={Team} fluid />
                </Col>
                <Col className='pt-5' >
                    <div className="loginContainer mt-5">
                        <h4 style={{ fontWeight: 'bold' }}>Welcome Back!</h4>
                        <span className='text-muted'>Login to continue</span>
                        {/* <People height={50} width={50} className="mt-3" /> */}
                        <Col lg={6} className='d-flex flex-column jusfify-content-left mt-5 mt-b'>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><Person /></InputGroup.Text>
                                <DefaultInput type='text' placeholder='Username' onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })} />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><Key /></InputGroup.Text>
                                <DefaultInput type='password' placeholder='Password' onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })} />
                            </InputGroup>
                            <Row className='d-flex flex-row align-items-center  mt-4'>
                                <Col lg={6}>
                                    <MyButton title="Login" onClick={() => props._login(loginUser)} style={{ width: '8rem', backgroundColor: '#DAEBFD', border: 'none', color: 'black' }}></MyButton>
                                </Col>
                                <Col lg={6}>
                                    <span className='text-muted' style={{ fontSize: '15px' }}> Forget password</span>
                                    {/* <MyButton title="Forgot password?" style={{ backgroundColor: 'transparent', border: 'none', color: 'black' }}></MyButton> */}
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default LoginTemplate