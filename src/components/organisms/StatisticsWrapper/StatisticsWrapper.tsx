import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {StatisticsType} from '../../../types'
import {StatisticsBox} from '../../molecules'
import styles from './index.module.scss'

interface Props {
    statistics: Array<StatisticsType>;
}

const StatisticsWrapper = ({statistics}: Props) => {
    return (
        <Row style={{
            marginTop: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',

        }} className='mb-5 mt-5 pt-5'>
            <Col>
                <span style={{
                    fontWeight: 'bold',
                    color: '#ff5421',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>Statistics</span>
                <h2 className='mb-5' style={{fontWeight: 'bold', color: 'black'}}>Online statistics</h2>

            </Col>
            <Col className={styles.statsWrapper}>
                {statistics.map((statistic, key) => <StatisticsBox key={key} {...statistic} />)}
            </Col>
        </Row>
    )
}

export default StatisticsWrapper