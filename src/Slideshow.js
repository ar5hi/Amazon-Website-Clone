import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css'



const slideImages = [
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81M5dnm3cHL._SX3000_.jpg',
    caption: 'Slide 0',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61W5aGF2cZL._SX3000_.jpg',
    caption: 'Slide 1',
  },
  // {
  //   url: 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg',
  //   caption: 'Slide 2',
  // },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dt2osJelL._SX3000_.jpg',
    caption: 'Slide 3',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61Vw-POl54L._SX3000_.jpg',
    caption: 'Slide 4',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61jlZUzuxuL._SX3000_.jpg',
    caption: 'Slide 5',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/6104tCrnXHL._SX3000_.jpg',
    caption: 'Slide 6',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/719D7DgXtVL._SX3000_.jpg',
    caption: 'Slide 7',
  },
  {
    url: 'https://m.media-amazon.com/images/I/51AQhraI0-L._SX3000_.png',
    caption: 'Slide 8',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71+KxP4e02L._SX3000_.jpg',
    caption: 'Slide 9',
  },
  {
    url: 'https://m.media-amazon.com/images/I/61GnAucagBL._SX3000_.png',
    caption: 'Slide 10',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71FdkjqVLyL._SX3000_.jpg',
    caption: 'Slide 11',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61D0dv3sEeL._SX3000_.jpg',
    caption: 'Slide 12',
  },
  {
    url: 'https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/91m9Do6IHJL._SX3000_.jpg',
    caption: 'Slide 13',
  },
]

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide
        cssClass="slick"
        easing="ease"
        duration={1500}
        transitionDuration={700}
      >
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div style={{ backgroundImage: `url(${slideImage.url})` }}></div>
          </div>
        ))}
      </Slide>
    </div>
  )
}
export default Slideshow;
