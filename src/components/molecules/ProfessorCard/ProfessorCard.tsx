import {useEffect, useState} from 'react';
import {Button, Card, Col, Row} from 'react-bootstrap'
import {ArrowUpRightSquare, BookmarkFill} from 'react-bootstrap-icons';
import {useNavigate} from 'react-router-dom';
import {ProfessorType} from '../../../types';
import {Tag} from "@chakra-ui/react";
import {MyButton} from "../../atoms";
import {useSelector} from "react-redux";


interface Props extends ProfessorType {
    _id: any;
    quality: number;
    numberOfRatings: number;
    takeAgain?: any
}

const ProfessorCard = ({
                           professorId,
                           _id,
                           numberOfRatings,
                           departments,
                           professorName,
                           schoolName,
                           quality,
                           takeAgain
                       }: Props) => {

    const navigate = useNavigate();
    const [disableNavigate, setDisableNavigate] = useState<boolean>(false);
    const isLoggedIn = useSelector((state: any) => state.isLoggedIn)

    return (<div style={{width: '25rem', backgroundColor: '#FDFDFE'}} className="mx-4"
                 onClick={() => disableNavigate === true && navigate(`/professor-details/${_id}`)}>
            <div className={'qualityWrapper'} >
                {quality && <> <h1 className={'firstPart'}>{quality.toFixed(2)}</h1>
                    <h5 className={'secondPart'} >/5</h5></>}
            </div>
            <p>Overall Quality Based on {numberOfRatings && numberOfRatings} ratings</p>
            <h5 style={{fontSize: '40px', fontWeight: '800'}}>{`${professorName}`}</h5>
            <p>Teacher in the {schoolName}</p>
            <p>Would take again</p>
            <h1 style={{
                fontSize: '37px',
                fontWeight: '900'
            }}>{takeAgain && (takeAgain.takeAgainYes && ((takeAgain.takeAgainYes / (takeAgain.takeAgainYes + takeAgain.takeAgainNo)) * (100))).toFixed(2)}%</h1>
            <p>Departments</p>
            {departments && departments.map((d) =>
                <Button variant="light" style={{pointerEvents: 'none', marginLeft: '5px'}}>{d.label}</Button>
            )}
            <div>
                <MyButton title={`Rate ${professorName}`}
                          style={{marginTop: '10px', color: 'white', backgroundColor: '#ff5421', border: 'none'}}
                          onClick={() => isLoggedIn ? navigate(`/rate/${_id && _id}`) : navigate('/login')}/>
            </div>

        </div>
    )
}

export default ProfessorCard