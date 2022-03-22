import React from "react";

const Card = (props) => {
    return (
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt="epicphoto" src={`https://robohash.org/gibbrishgang${props.id}?200x200`}></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;