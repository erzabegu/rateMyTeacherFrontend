import React, {useState} from 'react'
import {MortarboardFill} from 'react-bootstrap-icons'
import {DefaultInput, MyButton} from '../../atoms'
import './LoginTemplate.scss'
import {useNavigate} from "react-router-dom";

interface Props {
    _login(data: any): void;

    _forgotPassword(data: any): void;
}

const LoginTemplate = (props: Props) => {
    const [loginUser, setLoginUser] = useState<any>({})
    const navigate = useNavigate();
    return <div className={'mainWrapper'}>
        <div className={'wrapper'}>
            <div style={{flex: 1, textAlign: "center", color: 'white'}}>
                <div className={'leftSide'}>
                    <MortarboardFill height={100} width={100} color={'white'} onClick={() => navigate('/')}/>
                    {/*<p>Login to continue</p>*/}
                    <div style={{textAlign: 'left', width: '400px'}}>
                        <p className={'labels'}>Email</p>
                        <DefaultInput type='email' className={'inputs'}
                                      onChange={(e) => setLoginUser({...loginUser, email: e.target.value})}/>
                        <p className={'labels'}>Password</p>
                        <DefaultInput type='password' className={'inputs'}
                                      onChange={(e) => setLoginUser({...loginUser, password: e.target.value})}/>
                        <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
                            <MyButton title="Login" type='submit' onClick={() => props._login(loginUser)}
                                      style={{
                                          width: '8rem',
                                          backgroundColor: '#DAEBFD',
                                          border: 'none',
                                          color: 'black'
                                      }}></MyButton>
                            <span style={{fontSize: '15px', color: 'black'}} onClick={() =>
                                props._forgotPassword({email: loginUser.email})
                            }> Forget password</span>
                        </div>
                    </div>

                    <div style={{display: 'flex'}}><p>Don't have an account?</p><span
                        style={{marginLeft: '5px', color: 'black'}}
                        onClick={() => navigate('/register')}>Sign in</span></div>
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
            {/*<div className="d-flex flex-column image">*/}
            {/*    <h1>Join our community</h1>*/}
            {/*</div>*/}
            {/*<div className='pt-5'>*/}
            {/*    <div className="loginContainer mt-5">*/}
            {/*        /!* <People height={50} width={50} className="mt-3" /> *!/*/}
            {/*        <div  className='d-flex flex-column jusfify-content-left mt-5 mt-b mx-auto'>*/}
            {/*            <h4 style={{fontWeight: 'bold'}}>Welcome Back!</h4>*/}
            {/*            <span className='text-muted'>Login to continue</span>*/}
            {/*            <InputGroup className="mb-3">*/}
            {/*                <InputGroup.Text id="basic-addon1"><Person/></InputGroup.Text>*/}
            {/*                <DefaultInput type='email' placeholder='Email'*/}
            {/*                              onChange={(e) => setLoginUser({...loginUser, email: e.target.value})}/>*/}
            {/*            </InputGroup>*/}
            {/*            <InputGroup className="mb-3">*/}
            {/*                <InputGroup.Text id="basic-addon1"><Key/></InputGroup.Text>*/}
            {/*                <DefaultInput type='password' placeholder='Password'*/}
            {/*                              onChange={(e) => setLoginUser({...loginUser, password: e.target.value})}/>*/}
            {/*            </InputGroup>*/}
            {/*            <Row className='d-flex flex-row align-items-center  mt-4'>*/}
            {/*                <Col lg={6}>*/}
            {/*                    <MyButton title="Login" type='submit' onClick={() => props._login(loginUser)}*/}
            {/*                              style={{*/}
            {/*                                  width: '8rem',*/}
            {/*                                  backgroundColor: '#DAEBFD',*/}
            {/*                                  border: 'none',*/}
            {/*                                  color: 'black'*/}
            {/*                              }}></MyButton>*/}
            {/*                </Col>*/}
            {/*                <Col lg={6}>*/}
            {/*                    <span className='text-muted' style={{fontSize: '15px'}} onClick={() => {*/}
            {/*                        props._forgotPassword({email: loginUser.email})*/}
            {/*                    }}> Forget password</span>*/}
            {/*                </Col>*/}
            {/*            </Row>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    </div>
}

export default LoginTemplate