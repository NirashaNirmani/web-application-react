import React from 'react'
import './home.scss'

import video from '../../Assets/3.mp4'
import {GrLocation} from 'react-icons/gr'

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"> </div>
        <video src= {video} muted autoPlay loop type="video/mp4"></video>
        <div className="homeContent container">
          <div className="textDiv">
            <span className="smallText">
              Our Packages
            </span>

            <h1 className="homeTitle">
                  Search Your Holiday
              </h1>
          </div>

          <div className="cardDiv grid">
            <div className="destinationInput">
              <label htmlFor="city"> Search your Destination</label>
            
            <div className="input flex">
              <input type="text" placeholder='Enter name here...' />
              <GrLocation className='icon'/>
            </div>
            </div>

            <div className="dateInput">
              <label htmlFor="date"> Search your Date</label>
            
            <div className="input flex">
              <input type="date" />
              
            </div>
            </div>

            <div className="priceInput">
              <div className="label_total flex">
                <label htmlFor="price">Max Price : </label>
                <h3 className="total"> $5000</h3>
              </div>
              <div className="input flex">
                <input type="range" max='5000' min='1000' />
              </div>
              


            </div>
          </div>
        </div>

     


    </section>
  )
}
// import './home.css'

export default Home
