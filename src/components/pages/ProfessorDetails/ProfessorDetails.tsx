import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import { getById, modifyProfessors, showResults } from '../../../services/Professors/professorsService';
import { ProfessorDetailsTemplate } from '../../templates/ProfessorDetailsTemplate'

const ProfessorDetails = () => {
    const { id } = useParams();

    const [professorProfile, setProfessorProfile] = useState<any>({});
    const [results, setShowResults] = useState<any>({});


    useEffect(() => {
        getById(id).then((res: any) => setProfessorProfile(res.data))
        showResults(id).then((res: any) => setShowResults(res.data))
    }, [])

    const professorDegrees = [
        {
            degree: results?.rateMyTeacher?.twenty,
            degreeName: 'terrible'
        },
        {
            degree: results?.rateMyTeacher?.fourty,
            degreeName: 'bad'
        },
        {
            degree: results?.rateMyTeacher?.sixty,
            degreeName: 'good'
        },
        {
            degree: results?.rateMyTeacher?.eighty,
            degreeName: 'great'
        },
        {
            degree: results?.rateMyTeacher?.oneHundred,
            degreeName: 'awesome'
        }]
    return <>
        <Container className='mt-5'>
            <ProfessorDetailsTemplate professorDegrees={professorDegrees} numberOfRatings={results?.numberOfRatings} professorProfile={professorProfile} quality={results?.quality} comments={results?.textArea} />
        </Container>
    </>


}

export default ProfessorDetails