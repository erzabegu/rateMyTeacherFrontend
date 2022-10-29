import {MyButton, Avatar} from '../../atoms'
import React from 'react'

import {Container, Row, Col} from 'react-bootstrap'
import {MortarboardFill, Person} from 'react-bootstrap-icons'

import {useLocation, useNavigate} from 'react-router-dom'

import './style.scss'
import {useDispatch, useSelector} from 'react-redux'
import {setIsLoggedIn, setUser} from '../../../store/slices/user.slice'
import {useEffect} from 'react'
import {Menu, MenuItem} from '@mui/material'

interface Props {
    isLoggedIn?: boolean;
    initialState?: boolean;
    register?: boolean;
    login?: boolean;
    color?: string;
}

const Header = ({initialState, register, login, color}: Props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state: any) => state.isLoggedIn)
    const {firstName, userRoleName} = useSelector((state: any) => state.user)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('clicked')
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        console.log(location.pathname)
    }, [location])

    return <Container fluid style={{padding: '0px 16px', backgroundColor: color, marginTop: '0px'}}>
        <Row className='pt-2 pb-1'>
            <Col xs={7} md={9} xl={10}>
                <div onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
                    <MortarboardFill color={"#283779"} height={40} width={40}/>
                    <span style={{paddingLeft: '10px'}}>Rate Teacher</span>
                </div>
            </Col>
            <Col xs={5} md={3} xl={2} style={{textAlign: 'right', color: "#283779"}}>
                {!isLoggedIn && initialState && <>
                    <Person/>
                    <MyButton size={'sm'} className="loginButtonStyle" title='Login'
                              onClick={() => navigate('/login')}/>
                    <MyButton size={'sm'} className="registerButtonStyle" title='Register'
                              onClick={() => navigate('/register')}/>
                </>}
                {!isLoggedIn && register && <MyButton size={'sm'} className="loginButtonStyle" title='Login'
                                                      onClick={() => navigate('/login')}/>}
                {!isLoggedIn && login && <MyButton size={'sm'} className="loginButtonStyle" title='Register'
                                                   onClick={() => navigate('/register')}/>}
                {isLoggedIn && <div className='styledAvatar'>
                    <Avatar onClick={(e) => handleClick(e)} firstName={firstName && firstName}/>
                </div>}
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    style={{marginTop: '10px'}}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {userRoleName === 'admin' && location.pathname != '/admin' && <MenuItem onClick={() => {
                        navigate("/admin")
                        handleClose()
                    }}>Go to AdminPannel
                    </MenuItem>}
                    <MenuItem onClick={() => {
                        dispatch(setIsLoggedIn(false))
                        handleClose()
                    }}>Logout</MenuItem>
                </Menu>
            </Col>
        </Row>
    </Container>
}

export default Header