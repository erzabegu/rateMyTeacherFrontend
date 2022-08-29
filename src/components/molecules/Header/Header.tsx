import { MyButton, Avatar } from '../../atoms'

import { Container, Row, Col } from 'react-bootstrap'
import { MortarboardFill, Person } from 'react-bootstrap-icons'

import { useNavigate } from 'react-router-dom'

import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setIsLoggedIn, setUser } from '../../../store/slices/user.slice'
import { useEffect } from 'react'

interface Props {
    isLoggedIn?: boolean;
    initialState?: boolean;
    register?: boolean;
    login?: boolean;
}

const Header = ({ initialState, register, login }: Props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const isLoggedIn = useSelector((state: any) => state.isLoggedIn)

    useEffect(() => {
        console.log(isLoggedIn, 'isLoggedIn')
    }, [isLoggedIn])

    return <Container fluid>
        <Row className='pt-2 pb-1 mt-2' >
            <Col xs={7} md={9} xl={10}>
                <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <MortarboardFill color={"#283779"} height={40} width={40} />
                    <span style={{ paddingLeft: '10px' }}>Rate Teacher</span>
                </div>
            </Col>
            <Col xs={5} md={3} xl={2} style={{ textAlign: 'right', color: "#283779" }}>
                {!isLoggedIn && initialState && <>
                    <Person />
                    <MyButton size={'sm'} className="loginButtonStyle" title='Login' onClick={() => navigate('/login')} />
                    <MyButton size={'sm'} className="registerButtonStyle" title='Register' onClick={() => navigate('/register')} />
                </>}
                {!isLoggedIn && register && <MyButton size={'sm'} className="loginButtonStyle" title='Login' onClick={() => navigate('/login')} />}
                {!isLoggedIn && login && <MyButton size={'sm'} className="loginButtonStyle" title='Register' onClick={() => navigate('/register')} />}
                {isLoggedIn && <div className='styledAvatar' onClick={() => { dispatch(setIsLoggedIn(false)) }}><Avatar firstName='erza' /></div>}
            </Col>
        </Row>
    </Container >
}

export default Header