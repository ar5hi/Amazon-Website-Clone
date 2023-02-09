import React from 'react'
import Footer from './Footer'
import './Home.css'
import Image from './Image'
import Product from './Product'


function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          {/* <Image /> */}
          {/* <Slideshow /> */}
          <div className="home__row">
            <Product
              id="12321341"
              title="Michael Kors
Chronograph Women's Watch (Dial Colored Strap)"
              price={255.85}
              rating={4.5}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81X6b+mWenL._AC_UL480_FMwebp_QL65_.jpg"
              qty={1}
            />
            <Product
              id="49538094"
              title="Jordan Mens Air Jordan 1 Mid GS 554725 177 Pollen/Black/White - Size 5Y"
              price={439.99}
              rating={3.5}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61OzUni8t2L._UY695_.jpg"
              qty={1}
            />
          </div>
          <div className="home__row">
            <Product
              id="3254434345"
              title="Samsung Galaxy S22 5G (Green, 8GB, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
              price={799.23}
              rating={4.5}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71qZERyxy6L._SX679_.jpg"
              qty={1}
            />

            <Product
              id="23445930"
              title="Classmate Soft Cover 6 Subject Spiral Binding Notebook, Single Line, 300 Pages"
              price={98.99}
              rating={2.5}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61NUA0O7WTL._SX522_.jpg"
              qty={1}
            />
            <Product
              id="3254354345"
              title="Sennheiser Professional Audio HD 25 Plus Wired On Ear Headphones without microphone (Black)"
              price={598.99}
              rating={4.4}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81Ijos1lIOL._SY879_.jpg"
              qty={1}
            />
          </div>

          <div className="home__row">
            <Product
              id="90829332"
              title="Chanel Coco Mademoiselle Intense Eau De Parfum Spray 100ml/3.3oz"
              price={1094.98}
              rating={4.7}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71Cm7nHCuNL._SX522_.jpg"
              qty={1}
            />
          </div>

          <div className="home__row">
            <Product
              id="4976850"
              title="Apple iMac with Retina 5K Display (27-inch/68.58 cm, 8GB RAM, 3.1GHz 6-core 10th-Generation Intel Core i5 Processor, 256GB SSD Storage) - Silver"
              price={5171.99}
              rating={3.5}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71XyLsP7WjL._SX679_.jpg"
              qty={1}
            />

            <Product
              id="3254344345"
              title="NIVEA Soft Light Moisturizer for Face, Hand & Body, Instant Hydration, Non-Greasy Cream with Vitamin E & Jojoba Oil, 300 ml"
              price={50.99}
              rating={4}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61ConUYgKaL._SX522_.jpg"
              qty={1}
            />
          </div>

          <div className="home__row">
            <Product
              id="4999850"
              title="Office Chair, FelixKing Ergonomic Desk Chair with Adjustable Height and Lumbar Support Swivel Lumbar Support"
              price={210.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71sGpjQ%2BK%2BS._SS400_.jpg"
              qty={1}
            />
            <Product
              id="23448230"
              title="STAR WORK Silent Mute Wall Clocks Battery Operated Non-Ticking Quiet Decorative Wall Clocks for Living Room, Bathroom, Kitchen - Thicken Plastics Frame Glass Cover (Black)"
              price={90.08}
              rating={1.5}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81dbAwj+GBL._SX522_.jpg"
              qty={1}
            />
            <Product
              id="4903850"
              title="Carhartt Men's Big & Tall Midweight Sweatshirt Hooded Pullover Fit"
              price={199.99}
              rating={4}
              image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/81oiZOFuiJL._SX679._SX._UX._SY._UY_.jpg"
              qty={1}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home