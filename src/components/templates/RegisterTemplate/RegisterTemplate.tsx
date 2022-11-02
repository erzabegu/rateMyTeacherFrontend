import React, {useEffect, useState} from 'react'
import {Container, Col} from 'react-bootstrap'
import {Key, MortarboardFill, People, PersonPlus, PersonPlusFill} from 'react-bootstrap-icons'
import {DefaultInput, MyButton, SelectInput} from '../../atoms'
import {Header} from '../../molecules'
import './RegisterTemplate.scss'
import {useNavigate} from "react-router-dom";

interface Props {
    _register(data: any): void;
}

const RegisterTemplate = (props: Props) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<any>({userRoleName: 'user'})
    return <>
        <div className={'mainWrapper'}>
            <div className={'wrapper'}>
                <div style={{flex: 1, textAlign: "center", color: 'white'}}>
                    <div className={'leftSide'}>
                        <MortarboardFill height={100} width={100} color={'white'} onClick={() => navigate('/')}/>
                        {/*<p>Login to continue</p>*/}
                        <div style={{textAlign: 'left', width: '400px'}}>
                            <DefaultInput type='text' className='mb-3' placeholder={"Name"}
                                          onChange={(e) => setUser({...user, firstName: e.target.value})}/>
                            <DefaultInput type='text' className='mb-3' placeholder={"Surname"}
                                          onChange={(e) => setUser({...user, lastName: e.target.value})}/>
                            <DefaultInput type='text' placeholder='UserName' className='mb-3'
                                          onChange={(e) => setUser({...user, userName: e.target.value})}/>
                            <DefaultInput type='email' placeholder='E-mail' className='mb-3'
                                          onChange={(e) => setUser({...user, email: e.target.value})}/>
                            <DefaultInput type='password' placeholder='Password' className='mb-3'
                                          onChange={(e) => setUser({...user, password: e.target.value})}/>
                            <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
                                <MyButton title="Register" className="mb-4"
                                          style={{width: '10rem', backgroundColor: '#283779', border: 'none'}}
                                          onClick={() => props._register(user)}></MyButton>

                            </div>
                        </div>

                    </div>
                </div>
                <div style={{background: '#131E42', flex: 1, color: 'white'}}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '40%',
                        paddingLeft: '40px',
                        width: '80%'
                    }}>
                        <h1 style={{fontWeight: 'bold', letterSpacing: '3px'}}>Join Our<br/> Community </h1>
                        <p>A quality education grants us the ability to fight the war on ignorance and poverty</p>
                    </div>
                </div>
                {/*<Container fluid className="loginWrapper" style={{minHeight: '98.5vh'}}>*/}
                {/*    <Header register={true}/>*/}
                {/*    <Col className='mx-auto mt-5' lg={4}>*/}
                {/*        <div className="registerContainer">*/}
                {/*            <PersonPlus height={50} width={50} className="mt-2"/>*/}
                {/*            <Col lg={7} className="mx-auto pt-3 pb-3">*/}
                {/*                <DefaultInput type='text' placeholder='Name' className='mb-3'*/}
                {/*                              onChange={(e) => setUser({...user, firstName: e.target.value})}/>*/}
                {/*                <DefaultInput type='text' placeholder='Surname' className='mb-3'*/}
                {/*                              onChange={(e) => setUser({...user, lastName: e.target.value})}/>*/}
                {/*                <DefaultInput type='text' placeholder='UserName' className='mb-3'*/}
                {/*                              onChange={(e) => setUser({...user, userName: e.target.value})}/>*/}
                {/*                <DefaultInput type='email' placeholder='E-mail' className='mb-3'*/}
                {/*                              onChange={(e) => setUser({...user, email: e.target.value})}/>*/}
                {/*                <DefaultInput type='password' placeholder='Password' className='mb-3'*/}
                {/*                              onChange={(e) => setUser({...user, password: e.target.value})}/>*/}
                {/*                <MyButton title="Register" className="mb-4"*/}
                {/*                          style={{width: '10rem', backgroundColor: '#283779', border: 'none'}}*/}
                {/*                          onClick={() => props._register(user)}></MyButton>*/}
                {/*            </Col>*/}
                {/*        </div>*/}
                {/*    </Col>*/}
                {/*</Container>*/}
            </div>
        </div>
    </>
}

export default RegisterTemplate