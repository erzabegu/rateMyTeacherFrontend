import React, {useEffect, useState} from 'react'
import {Container} from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import {getById, getBySchool, modifyProfessors, showResults} from '../../../services/Professors/professorsService';
import {ProfessorDetailsTemplate} from '../../templates/ProfessorDetailsTemplate'
import {Header} from "../../molecules";
import {Footer} from "../../organisms";

const ProfessorDetails = () => {
    const {id} = useParams();

    const [professorProfile, setProfessorProfile] = useState<any>({});
    const [results, setShowResults] = useState<any>({});
    const [relatedProfessors, setRelatedProfs] = useState<Array<any>>([]);


    useEffect(() => {
        getById(id).then((res: any) => setProfessorProfile(res.data))
        showResults(id).then((res: any) => setShowResults(res.data))
    }, [id])
    useEffect(() => {
        professorProfile.schoolName && getBySchool(professorProfile.schoolName && professorProfile.schoolName).then((res: any) => setRelatedProfs(res.data))
    }, [professorProfile])

    const professorDegrees = [
        {
            degree: results?.rateMyTeacher?.twenty,
            degreeName: 'Terrible'
        },
        {
            degree: results?.rateMyTeacher?.fourty,
            degreeName: 'Bad'
        },
        {
            degree: results?.rateMyTeacher?.sixty,
            degreeName: 'Good'
        },
        {
            degree: results?.rateMyTeacher?.eighty,
            degreeName: 'Great'
        },
        {
            degree: results?.rateMyTeacher?.oneHundred,
            degreeName: 'Awesome'
        }]
    return <>
        <Header initialState={true}  color={'#151515'}  textColor={'white'}/>
        <Container className='mt-5'>
            <ProfessorDetailsTemplate
                relatedProfs={relatedProfessors}
                professorDegrees={professorDegrees} numberOfRatings={results?.numberOfRatings}
                professorProfile={professorProfile} quality={results?.quality}
                takeAgain={results?.takeAgain}
                comments={results?.textArea}/>
        </Container>
        <div style={{backgroundColor: '#151515', color: 'white'}} className={'mt-5 pt-5 pb-5'}>
            <Footer/>
        </div>
    </>


}

export default ProfessorDetails