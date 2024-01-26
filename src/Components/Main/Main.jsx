import React from 'react'
import './main.scss'



//import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'





import img from '../../Assets/img1.jpg'



//array named data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'NewZealand',
    grade: 'Cultural relax',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best traval destination in the world.'
  },

  // {
  //   id:2,
  //   imgSrc: img2,
  //   destTitle:' Machu Picchu',
  //   location:'Peru',
  //   grade:'Cultural relax',
  //   fees:'$600',
  //   description:'More than 7,000 feet above sea level in the Andes Mountains, Machu Picchu is the most visited tourist destination in Peru'
  // },
  // {
  //   id:3,
  //   imgSrc: img3,
  //   destTitle:'The Palace of Versailles',
  //   location:'France',
  //   grade:'Cultural relax',
  //   fees:'$750',
  //   description:'The Palace of Versailles stands is a testament to the grandeur of the French monarchy'
  // },
  // {
  //   id:4,
  //   imgSrc: img4,
  //   destTitle:'Universal Studios',
  //   location:'Hollywood',
  //   grade:'Cultural relax',
  //   fees:'$700',
  //   description:'The original Universal Studios in Hollywood attracts millions of tourists each year. Unique to this Universal location is the famous Studio Tour'
  // },
  // {
  //   id:5,
  //   imgSrc: img5,
  //   destTitle:'Bourbon Street',
  //   location:'New Orleans',
  //   grade:'Cultural relax',
  //   fees:'$700',
  //   description:'‌Bourbon Street, located in the heart of the French Quarter in New Orleans, Louisiana, attracts tourists from all over the world who come to enjoy its entertainment, nightlife, music, food, and drinks'
  // },
  // {
  //   id:6,
  //   imgSrc: img6,
  //   destTitle:'Metropolitan Museum of Art',
  //   location:'N.Y.C',
  //   grade:'Cultural relax',
  //   fees:'$700',
  //   description:'The Metropolitan Museum of Art, located in New York City, is one of the worlds premier art museums, showcasing a vast collection spanning over 5,000 years of human history. Situated in Central Park'
  // },
  // {
  //   id:7,
  //   imgSrc: img7,
  //   destTitle:'The Lincoln Memorial',
  //   location:'Washington D.C',
  //   grade:'Cultural relax',
  //   fees:'$700',
  //   description:'The Lincoln Memorial stands as a powerful and iconic tribute to the 16th President of the United States, Abraham Lincoln. Its majestic architecture, including the famous statue of Lincoln seated in contemplation, draws visitors from around the world.'
  // },
  // {
  //   id:8,
  //   imgSrc: img8,
  //   destTitle:'Universal Studios',
  //   location:'Orlando',
  //   grade:'Cultural relax',
  //   fees:'$700',
  //   description:'Universal Studios, Orlando transports guests into the magical realms of their favorite movies and TV shows.'
  // },
  // {
  //   id:9,
  //   imgSrc: img9,
  //   destTitle:'Lake Mead',
  //   location:'Boulder City',
  //   grade:'Cultural relax',
  //   fees:'$700',
  //   description:'Lake Mead, located on the border of Nevada and Arizona, is a stunning and expansive reservoir with crystal-clear waters surrounded by breathtaking landscapes. '
  // },


]


const Main = () => {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
          Most Visited Destination
        </h3>
      </div>

      <div className="secContent grid">

        {/*create array to fetch each destination at once*/}

        {
          Data.map(({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div className="singleDestination">
                {/*will return single id from  the map array */}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />

                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">
                    {destTitle}
                   </h4>
                   <span className="continent flex">
                   <HiOutlineLocationMarker className='icon'/>
                   <span className="name">{location}</span>
                   </span>

                   <div className="fees flex">
                    <div className="grade">
                      <span>{grade}</span>
                    </div>
                    <div className="price">
                      <h5 >{fees}</h5>
                    </div>
                   </div>

                   <div className="desc">
                    <p>{description}</p>
                   </div>

                   <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                   </button>
                   
                </div>
              </div>
            )
          })
        }
      </div>


    </section>


  )



}
// import './main.css'

export default Main
