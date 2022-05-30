import React from 'react'

export default function Card(props) {
    return (
        <div className='card'>
            <img className='card__img' src={props.imageUrl} alt="" />
            <div className="card__box">
                <div className="card__geo">
                    <div className="card__geo-country">{props.location}</div>
                    <a className='card__geo-link' href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card__title">{props.title}</h1>
                <p className='card__date'>{`${props.startDate} - ${props.endDate}`}</p>
                <p className='card__desc'>{props.description}</p>
            </div>
        </div>
    )
}
