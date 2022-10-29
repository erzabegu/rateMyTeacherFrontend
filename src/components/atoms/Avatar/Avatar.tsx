import React from 'react'
import {UserType} from '../../../types'
import './style.scss'

interface Props extends UserType {
    onClick?(e: React.MouseEvent<HTMLButtonElement>): void;
}

const Avatar = (props: Props) => {
    return (
        <>
            <button onClick={props.onClick} className='avatar'>{props.firstName[0].toUpperCase()}</button>
        </>
    )
}

export default Avatar