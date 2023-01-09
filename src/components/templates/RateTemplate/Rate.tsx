import React, {useEffect, useState} from 'react'
import {Card, Col, Container} from 'react-bootstrap'
import {Navigate, useNavigate, useParams} from 'react-router-dom'
import {getById, modifyProfessors} from '../../../services/Professors/professorsService'
import {DefaultInput, MyButton, SelectInput} from '../../atoms'
import {RatingStars} from '../../atoms/RatingStars'
import {Header} from "../../molecules";
import style from './index.module.scss'
import {Footer} from "../../organisms";
import {toast, ToastContainer} from "react-toastify";
import {injectStyle} from "react-toastify/dist/inject-style";

interface Demo {
    rating: number | 20,
    difficult: number ,
    takeAgain: string,
    materials: string,
    review: string

}

function Rate() {

    if (typeof window !== "undefined") {
        injectStyle();
    }

    const {id} = useParams();
    const navigate = useNavigate();

    const [professor, setProfessor] = useState<any>({});
    const [rate, setRate] = useState<Demo>(initial);
    useEffect(() => {
        getById(id).then((res: any) => {
            setProfessor(res.data)
        })
    }, [id])

    const _modifyProfessor = (professor: any, rate: any) => {
        if (rate.rating && rate.difficult && rate.takeAgain.length > 0 && rate.materials.length > 0 && rate.review.length > 0){
            modifyProfessors(professor._id, {
                ...professor, ratings: [...professor.ratings,
                    {questionType: "RateYourProfessor", response: rate.rating && rate?.rating},
                    {questionType: "difficult", response: rate.difficult && rate?.difficult},
                    {questionType: "takeAgain", response: rate.takeAgain && rate?.takeAgain},
                    {questionType: "materials", response: rate.materials && rate?.materials},
                    {questionType: "textarea", response: rate.review && rate?.review}]
            }).then((res: any) => navigate('/'))
        } else {
            toast.warning("All fields are mandatory, please write a longer comment");
        }
    }

    return <>
        <Header initialState={true} color={'#151515'} textColor={'white'}/>
        <Container className={'mt-5 mx-auto'}>
            <Col lg={8} className={'mx-auto d-flex flex-column'} style={{gap: '20px'}}>
                <Card style={{
                    padding: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
                }}>
                    <h6>Rate your professor</h6>
                    <RatingStars rating={20} handleRating={(rate: any) => setRate({...rate, rating: rate})}/>
                </Card>
                <Card style={{
                    padding: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
                }}>
                    <div>
                        <h6>How difficult was this professor</h6>
                        <RatingStars rating={20} handleRating={(r: any) => setRate({...rate, difficult: r})}/>
                    </div>
                </Card>
                <Card style={{
                    padding: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
                }}>
                    <div>
                        <h6>Would you take this professor again</h6>
                        <SelectInput
                            options={[{name: '', value: ''}, {name: 'yes', value: 'yes'}, {name: 'no', value: 'no'}]}
                            onChange={(e) => {
                                setRate({...rate, takeAgain: e.target.value})
                            }}/>
                    </div>
                </Card>
                <Card style={{
                    padding: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
                }}>
                    <div>
                        <h6>Did this professor use materials propriately?</h6>
                        <SelectInput
                            options={[{name: '', value: ''}, {name: 'yes', value: 'yes'}, {name: 'no', value: 'no'}]}
                            onChange={(e) => {
                                setRate({...rate, materials: e.target.value})
                            }}
                        />
                    </div>
                </Card>
                <Card style={{
                    padding: '10px',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px'
                }}>
                    <div>
                        <h6>Write a comment</h6>
                        <DefaultInput type="textarea" onChange={(e) => {
                            setRate({...rate, review: e.target.value})
                        }}/>
                    </div>
                </Card>
                <div>
                    <MyButton type='submit' title="Submit" style={{backgroundColor: '#FF5420', border: 'none'}}
                              onClick={() => _modifyProfessor(professor, rate)
                                  // navigate('/')
                              }/>
                </div>
            </Col>
        </Container>
        <div style={{color: 'white', backgroundColor: 'black'}} className={'mt-5 pt-5 pb-5'}>
            <Footer/>
        </div>
        <ToastContainer/>
    </>
}

const initial: Demo = {
    rating: 20,
    difficult: 20,
    takeAgain: '',
    materials: '',
    review: '',
}
export default Rate