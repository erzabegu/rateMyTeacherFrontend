import React from 'react'
import {Card, Col} from 'react-bootstrap'
import {
    Bookmark,
    BookmarkStar,
    BookmarkStarFill,
    Building,
    Mortarboard,
    MortarboardFill,
    PeopleFill,
    PersonFill,
    Star
} from 'react-bootstrap-icons'
import CountUp, {CountUpProps} from 'react-countup'
import {StatisticsType} from '../../../types'
import './style.scss'


const StatisticsBox = ({end, iconName, iconText}: StatisticsType) => {
    const renderIcons = (iconName: string) => {
        switch (iconName) {
            case 'professor':
                return <MortarboardFill height={50} width={50} color={'#ff5421'}/>
            case 'schools':
                return <Building height={50} width={50} color={'#ff5421'}/>
            // case 'ratings':
            //     return <Star height={50} width={50} color={'#234262'} />
            case 'users':
                return <PeopleFill height={50} width={50} color={'#ff5421'}/>
        }
    }

    return <Col className="ml-1 mt-2 mb-5">
        <div className='statisticsBox'>
            <div style={{padding: '10px 2px'}}>{renderIcons(iconName)}</div>
            <div>
                <h4><CountUp end={end} style={{fontWeight: 'bold'}}/> {iconText.toLocaleLowerCase()}</h4>
            </div>
        </div>
    </Col>
}

export default StatisticsBox