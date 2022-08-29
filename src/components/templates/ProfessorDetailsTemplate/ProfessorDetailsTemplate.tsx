import { useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ProfessorType, RatingChart } from '../../../types'
import { MyButton } from '../../atoms'
import { ProfessorCard } from '../../molecules'
import { RatingDegreeOrganism } from '../../organisms'

interface Props {
    professorDegrees: Array<RatingChart>,
    professorProfile: any;
    quality?: any;
    comments?: any;
    numberOfRatings: number;
}

const ProfessorDetailsTemplate = ({ professorDegrees, professorProfile, quality, comments, numberOfRatings }: Props) => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: any) => state.isLoggedIn)



    return (
        <Container>
            <Row className='d-flex align-items-center'>
                <Col lg={4}>
                    <ProfessorCard {...professorProfile} quality={quality} numberOfRatings={numberOfRatings} />
                </Col>
                <Col className={"mt-5"} style={{ marginLeft: "150px" }} lg={4}>
                    <RatingDegreeOrganism professorDegress={professorDegrees} />
                </Col>
            </Row>
            <Col>
                <h5>Comments</h5>
                {comments && comments.map((comment: any) => <div>{comment}</div>)}
            </Col>
            <Col lg={2} >
                <MyButton title={`rate ${professorProfile.professorName}`} onClick={() => isLoggedIn ? navigate(`/rate/${professorProfile?._id}`) : navigate('/login')} />
            </Col>
        </Container >
    )
}

export default ProfessorDetailsTemplate