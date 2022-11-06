import React from 'react'
import {RatingChart} from '../../../types'
import {RatingProgressBar} from '../../atoms'


const RatingDegrees = ({degree, degreeName}: RatingChart) => {
    return <div style={{display: 'flex'}}>
        <div style={{flex: '1'}}>
            <p>{degreeName}</p>
        </div>
        <div style={{flex: '4', marginBottom: '7px', display: 'flex', gap: '10px'}}>
            <div style={{width: '100%', backgroundColor:'#E7E7E7', height:'20px'}}>
                <RatingProgressBar now={degree}/>
            </div>
            <span>{degree}</span>
        </div>
    </div>
}

export default RatingDegrees