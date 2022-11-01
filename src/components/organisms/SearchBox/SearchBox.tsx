import {Divider, List, ListItem, ListItemText} from '@mui/material'
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import Professor from '../../../assets/images/i.png'
import {DefaultImage} from '../../atoms'
import {TextInput} from '../../molecules'
import './style.scss'

interface Props {
    onChange?(e: any): void;

    professorsToRender?: any
}

const SearchBox = (props: Props) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Row className='mx-5 mt-5 px-5' lg={11}>
                <Col className={'d-flex flex-column align-self-center col-6 mx-auto '}
                     style={{textAlign: 'center', color: '#ff5421', marginTop: '130px'}}>
                    <span>RATE TEACHER</span>
                    <h1 style={{
                        color: 'white',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        textTransform: 'capitalize',
                        padding: '20px 0px'
                    }}>Best online platform to <br/> rate your teachers</h1>
                    <h5 className='mb-4' style={{color: 'white'}}>Enter a teacher to get
                        started</h5>
                    <TextInput className={'styledSearchBox'} placeholder='Enter your professor'
                               onChange={props.onChange}/>
                    <List component="nav" aria-label="mailbox folders"
                          style={{backgroundColor: 'white', padding: '0px', borderRadius: '5px', marginLeft: '7px'}}>
                        {props.professorsToRender && props.professorsToRender.length > 0 && props.professorsToRender.map((prof: any) =>
                            <>
                                <ListItem button onClick={() => {
                                    navigate(`professor-details/${prof._id}`)
                                }}>
                                    <ListItemText primary={`${prof.professorName} - ${prof.schoolName}`}/>
                                </ListItem>
                                {/*<Divider color={'#F2F2F2'}/>*/}
                            </>)}
                    </List>
                </Col>
                {/*<Col className={'d-flex justify-content-left mt-4'} style={{paddingLeft: '100px'}}>*/}
                {/*    <DefaultImage className={'professorImage'} src={Professor} fluid/>*/}
                {/*</Col>*/}
            </Row>
        </Container>
    )
}

export default SearchBox