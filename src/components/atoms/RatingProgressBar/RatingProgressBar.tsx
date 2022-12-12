import React from 'react'

interface Props {
    now: number
}

const RatingProgressBar = (props: Props) => {
    return <div style={{maxWidth: props.now, height: '100%', backgroundColor: '#FF5420'}}/>
}

export default RatingProgressBar