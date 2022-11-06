import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ProfessorType } from '../../../types'
import { ProfessorCard } from '../../molecules'

interface Props {
    professorsList: Array<ProfessorType>,
    quality?: any;
    numberOfRatings: number;
}

const ProfessorsList = ({ professorsList, quality, numberOfRatings }: Props) => {
    return (
        <Row className="mt-5">
            {/*{professorsList.map((prof, index) => <ProfessorCard key={index} numberOfRatings={numberOfRatings} quality={quality} {...prof} />)}*/}
        </Row>
    )
}

export default ProfessorsList