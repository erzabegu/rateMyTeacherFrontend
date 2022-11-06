import React from 'react'
import {Col} from 'react-bootstrap'
import {RatingChart} from '../../../types'
import {RatingDegrees} from '../../molecules'

interface Props {
    professorDegress: Array<RatingChart>
}

const RatingDegreeOrganism = ({professorDegress}: Props) => {
    return <div style={{backgroundColor: '#F7F7F7', padding: '15px', borderRadius: '10px'}}>
            <h6 style={{marginBottom: '30px'}}>Rating distribution</h6>
        {professorDegress.map((degree: any) => <RatingDegrees {...degree} />)}
    </div>
}

export default RatingDegreeOrganism