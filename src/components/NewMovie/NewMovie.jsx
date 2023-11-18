import React from 'react'
import './NewMovie.css'
import movie from '../../img/home.jpg'
import menu from '../../img/icons/menu.png'
import play from '../../img/icons/play.png'
import Nav from '../nav/Nav'
function NewMovie() {
  return (
    <>
      
      <div className='movie-wrapper prop-lg prop-md'>
        
      <img className='new-movie' src={movie} alt="" />
      <div className='txt-container'>
        <h2>cobra kai</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error optio deleniti fuga molestias inventore harum, officiis recusandae corrupti pariatur enim.</p>
        </div>
        <div className='btn-container'>
          <button className='play-btn'><img className='menu' src={play} alt="" /> PLAY</button>
          <button className='list-btn'><img className='menu' src={menu} alt="" /> MY LIST</button>
        </div>
      </div>
      </>
  )
}

export default NewMovie