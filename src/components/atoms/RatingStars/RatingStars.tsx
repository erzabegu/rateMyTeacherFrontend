import React, { ReactElement } from "react";
import { Rating } from 'react-simple-star-rating'

interface Props {
    rating: number;
    fullIcon?: ReactElement | null;
    emptyIcon?: ReactElement | null;
    readonly?: boolean;
    tooltipArray?: Array<string>;
    showTooltip?: boolean;
    tooltipStyle?: any;
    handleRating?(rate: number): void;
}
const RatingStars = ({ rating, fullIcon, emptyIcon, readonly, tooltipArray, showTooltip, tooltipStyle, handleRating }: Props) => {

    return <>
        <Rating  fillColor={'#FF5420'} onClick={handleRating} ratingValue={rating} tooltipStyle={tooltipStyle} showTooltip={showTooltip} tooltipArray={tooltipArray} fullIcon={fullIcon} emptyIcon={emptyIcon} readonly={readonly} />
    </>
}

export default RatingStars