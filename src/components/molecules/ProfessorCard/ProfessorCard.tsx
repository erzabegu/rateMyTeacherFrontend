import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { BookmarkFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { ProfessorType } from '../../../types';


interface Props extends ProfessorType {
    quality: number;
    numberOfRatings: number;
}
const ProfessorCard = ({ professorId, numberOfRatings, professorName, schoolId, departmentId, departmentName, professorImage, professorSurname, schoolName, quality }: Props) => {

    const navigate = useNavigate();
    const [disableNavigate, setDisableNavigate] = useState<boolean>(false);

    return (<Card style={{ width: '18rem', backgroundColor: '#FDFDFE' }} className="mx-4"
        onClick={() => disableNavigate === true ? navigate(`/professor-details/${professorId}`) : console.log('hi')}>
        <Col className='d-flex justify-content-end py-2'>
            {/* <BookmarkFill color={saved ? 'yellow' : 'black'} onClick={() => {
                        setSaved(!saved)
                        setDisableNavigate(false)
                    }} /> */}
        </Col>
        <Row>
            <Col>
                <p>Quality</p>
                <div style={{ height: '80px', width: '80px', backgroundColor: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{quality && quality}</div>
                <p>{numberOfRatings && numberOfRatings}</p>
            </Col>
            <Col>
                <h5>{`${professorName}`}</h5>
                <p>{departmentName}</p>
                <p>{schoolName}</p>
            </Col>
        </Row>
    </Card>
    )
}

export default ProfessorCard