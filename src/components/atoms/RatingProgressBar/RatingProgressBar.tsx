// import {ProgressBar, ProgressBarProps} from 'react-bootstrap'
import {Progress} from '@chakra-ui/react'
import styles from './index.module.scss'
import {Line, Circle} from 'rc-progress';

interface Props {
    now: number
}

const RatingProgressBar = (props: Props) => {
    return <div style={{maxWidth: props.now, height: '100%', backgroundColor: '#FF5420'}}/>

}

export default RatingProgressBar