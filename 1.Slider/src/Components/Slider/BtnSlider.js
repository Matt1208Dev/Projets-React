import React from 'react';
import leftArrow from './icons/left-arrow.svg';
import rightArrow from './icons/right-arrow.svg';


export default function BtnSlider(props) {
    return (


        <div>
            <button
            onClick={props.moveSlide}
            className={props.direction === 'prev' ? 'btn-slide prev' : 'btn-slide next'}>
                <img src={props.direction === 'prev' ? leftArrow : rightArrow } alt="" />
            </button>
        </div>
    )
}
