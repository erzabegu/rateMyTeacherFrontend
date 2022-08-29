import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getById, modifyProfessors } from '../../../services/Professors/professorsService'
import { DefaultInput, MyButton, SelectInput } from '../../atoms'
import { RatingStars } from '../../atoms/RatingStars'

interface Demo {
    rating: number,
    difficult: number,
    takeAgain: string,
    materials: string,
    review: string

}
function Rate() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [professor, setProfessor] = useState<any>({});
    const [rate, setRate] = useState<Demo>(initial);
    useEffect(() => {
        getById(id).then((res: any) => { setProfessor(res.data) })
    }, [])

    const _modifyProfessor = (professor: any, rate: any) => {
        console.log(rate, 'rate')
        if (rate.rating && rate.difficult && rate.takeAgain !== "" && rate.materials && rate.review.length > 10) {
            modifyProfessors(professor._id, {
                ...professor, ratings: [...professor.ratings,
                { questionType: "RateYourProfessor", response: rate.rating && rate?.rating },
                { questionType: "difficult", response: rate.difficult && rate?.difficult },
                { questionType: "takeAgain", response: rate.takeAgain && rate?.takeAgain },
                { questionType: "materials", response: rate.materials && rate?.materials },
                { questionType: "textarea", response: rate.review && rate?.review }]
            }).then((res: any) => navigate('/'))
        }
        else {
            console.log('wrong')
        }
        // setProfessor({ ...professor, ratings: [...professor.ratings, { questionType: "RateYourProfessor", response: rate }] })
    }

    const listOfQuestions = [{
        questionId: 1,
        question: "Rate your professor",
        questionType: "rating",
    },
    {
        questionId: 2,
        question: "How difficult was this professor?",
        questionType: "rating",
    },
    {
        questionId: 3,
        question: "Would you take this professor again?",
        questionType: "radio",
        options: ['Yes', 'No']
    },
    {
        questionId: 4,
        question: "Did this professor use materials propriately?",
        questionType: "radio",
        options: ['Yes', 'No']
    },
    {
        questionId: 5,
        question: "Write a Review",
        questionType: "textarea",
    }]


    return <Container>
        <div>
            <h6>Rate your professor</h6>
            <RatingStars rating={20}
                handleRating={(rateee: any) => setRate({ ...rate, rating: rateee })}
            />
        </div>
        <div>
            <h6>How difficult was this professor</h6>
            <RatingStars rating={20} handleRating={(r: any) => setRate({ ...rate, difficult: r })} />
        </div>
        <div>
            <h6>Would you take this professor again</h6>
            <SelectInput options={[{ name: '', value: '' }, { name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }]} onChange={(e) => {
                setRate({ ...rate, takeAgain: e.target.value })
                // setProfessor({ ...professor, ratings: [...professor.ratings, { questionType: "TakeAgain", response: e.target.value }] })
            }} />
        </div>
        <div>
            <h6>Did this professor use materials propriately?</h6>
            <SelectInput options={[{ name: '', value: '' }, { name: 'yes', value: 'yes' }, { name: 'no', value: 'no' }]}
                onChange={(e) => {
                    setRate({ ...rate, materials: e.target.value })
                    // setProfessor({ ...professor, ratings: [...professor.ratings, { questionType: "materials", response: e.target.value }] })
                }}
            />
        </div>
        <div>
            <h6>Write a review</h6>
            <DefaultInput type="textarea" onChange={(e) => {
                setRate({ ...rate, review: e.target.value })
                // setProfessor({ ...professor, ratings: [...professor.ratings, { questionType: "textarea", response: e.target.value }] })
            }} />
        </div>
        <div>
            <MyButton type='submit' title="submit" onClick={() => {
                _modifyProfessor(professor, rate)
                // navigate('/')
            }} />
        </div>
    </Container>


}
const initial: Demo = {
    rating: 0,
    difficult: 0,
    takeAgain: '',
    materials: '',
    review: '',
}
export default Rate