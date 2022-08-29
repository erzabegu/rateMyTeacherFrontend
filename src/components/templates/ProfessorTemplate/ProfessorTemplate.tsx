import { Row, Col } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { ProfessorType } from '../../../types'
import { Header } from '../../molecules'
import { DepartmentsList } from '../../molecules/DepartmentsList'
import { ProfessorsList } from '../../organisms/ProfessorsList'

interface Props {
    options: Array<any>;
    professorsList: Array<ProfessorType>;
    numberOfRatings?: any;
}

const ProfessorTemplate = ({ options, professorsList, numberOfRatings }: Props) => {
    return <>
        {/* <Header isLoggedIn={true} /> */}
        <Container className='mt-5'>
            <Col lg={4}>
                <DepartmentsList options={options} text={"Departments"} />
            </Col>
            <Row>
                <ProfessorsList numberOfRatings={numberOfRatings} professorsList={professorsList} />
            </Row>
        </Container>
    </>
}

export default ProfessorTemplate