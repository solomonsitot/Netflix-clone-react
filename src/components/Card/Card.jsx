// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../../bootstrap.css';
import './Card.css';

function Card(props) {
  return (
    <>
   <h4 className='title fw-bold'>{props.title}</h4>
      <div className='card-wrapper '>
        <div className='img-wrapper'>
        <div className={props.size}>
          <img className='card-img' src={props.movie1} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie2} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie3} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie4} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie5} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie6} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie7} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie8} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie9} alt="" />
        </div>
        <div className={props.size}>
          <img className='card-img' src={props.movie10} alt="" />
        </div>
        </div>
      </div>
    </>
  );
}

export default Card;


