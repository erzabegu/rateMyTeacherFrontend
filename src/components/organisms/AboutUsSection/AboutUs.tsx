import React from 'react'
import {Col, Row} from 'react-bootstrap'
import {DefaultImage, MyButton} from '../../atoms'
import Rating from '../../../assets/images/aboutus.jpg'

const AboutUs = () => {
    return (
        <Col lg={12} className='mx-auto d-flex flex-column align-items-center justify-content-between mb-5 mt-5 pt-5'>
            <span style={{fontWeight: 'bold', color: '#ff5421', textTransform: 'uppercase', letterSpacing: '1px'}}>Why rate teacher?</span>
            <h2 className='mb-5' style={{fontWeight: 'bold', color: 'black'}}>Rate my Teacher Platform</h2>
            <Row className={'d-flex'}>
                <Col sm={12} lg={6}>
                    <DefaultImage
                        src={"https://images.squarespace-cdn.com/content/v1/5475f6eae4b0821160f6ac3e/1584463500927-5RRBUI5Y0YZL3FT5TTU5/iStock-1141509628.jpg"}
                        style={{borderRadius: "20px", filter: 'brightness(60%)'}}
                        fluid/>
                </Col>
                <Col sm={12} lg={6} className='d-flex align-items-center' style={{paddingLeft: '30px'}}>
                    <p style={{textAlign: 'center', fontWeight: '600'}}>
                        Education helps us get exposure to new ideas and concepts that we can use to appreciate and
                        improve
                        the world around us and the world within us.
                        When we improve our education and continue to learn, we can foster new connections, increase our
                        marketable skills, and understand people better.
                        Rate my teacher is an online platform available for students in Kosova. You can search your
                        teacher
                        by name and
                        see ratings that other students submitted to them. You can rate your teacher when you answers
                        the
                        questions in
                        our questionnaires. Please be honest when you do ratings.</p>
                </Col>
            </Row>
        </Col>
    )
}

export default AboutUs