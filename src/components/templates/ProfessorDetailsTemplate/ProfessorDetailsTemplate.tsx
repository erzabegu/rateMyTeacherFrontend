import {useEffect} from 'react'
import {Container, Col, Row, Card} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {ProfessorType, RatingChart} from '../../../types'
import {MyButton} from '../../atoms'
import {ProfessorCard} from '../../molecules'
import {Footer, RatingDegreeOrganism} from '../../organisms'
import {CalendarMinus, ClipboardMinus, DashLg, StarFill} from "react-bootstrap-icons";
import {getBySchool} from "../../../services/Professors/professorsService";

interface Props {
    professorDegrees: Array<RatingChart>,
    professorProfile: any;
    quality?: any;
    comments?: any;
    numberOfRatings: number;
    relatedProfs: Array<any>;
    takeAgain?: any;
}

const ProfessorDetailsTemplate = ({
                                      professorDegrees,
                                      professorProfile,
                                      quality,
                                      comments,
                                      numberOfRatings,
                                      relatedProfs,
                                      takeAgain
                                  }: Props) => {
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: any) => state.isLoggedIn)


    return (
        <>
            <Container>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <div style={{flex: '1', borderRadius: '10px'}}>
                        <ProfessorCard {...professorProfile} quality={quality} numberOfRatings={numberOfRatings}
                                       _id={professorProfile._id}
                                       takeAgain={takeAgain}/>

                    </div>
                    <div style={{flex: '1', display: 'flex', flexDirection: 'column', gap: '20px'}}>
                        <div>
                            <RatingDegreeOrganism professorDegress={professorDegrees}/>
                        </div>
                        <div style={{
                            height: 'fit-content',
                            borderRadius: '8px',
                            backgroundColor: '#F7F7F7',
                            border: '0.5px solid #ff5421'
                        }}>
                            {relatedProfs && <div style={{display: 'flex', flexDirection: 'column', padding: '15px'}}>
                                <h6>Related Professors</h6>
                                <div style={{display: 'flex', width: '400px', flexWrap: "wrap", gap: '10px',}}>
                                    {relatedProfs.map((p) => p._id != professorProfile._id &&
                                        <div style={{flex: 1, padding: '10px', backgroundColor: '#E9ECEF'}}
                                             onClick={() => navigate(`/professor-details/${p._id}`)}>
                                            <span style={{backgroundColor: '#E9ECEF'}}>
                                                {p.professorName}
                                                <br/>
                                                {p.schoolName}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className={'mx-4 mt-5'} style={{display: 'flex'}}>
                    <div style={{flex: '1'}}>
                        <h5 style={{borderBottom: '1px solid #E9ECEF', width: 'fit-content'}}>Comments</h5>
                        {comments && comments.map((comment: any) => <div><p><DashLg
                            style={{marginRight: '10px'}}/>{comment}
                        </p></div>)}
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProfessorDetailsTemplate