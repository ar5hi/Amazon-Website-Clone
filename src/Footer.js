import React from 'react'
import './Footer.css'

function Footer() {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="footer">
      <button onClick={scroll}>Back to top</button>

      <div className="footer__container">
        <div className="footer__stuff">
          <div className="footer__one">
            <div className="footer__title">
              <p>Get to Know Us</p>
            </div>
            <div className="footer__text">
              <p>Careers</p>
              <p>Blog</p>
              <p>About Amazon</p>
              <p>Investor Relations</p>
              <p>Amazon Devices</p>
            </div>
          </div>

          <div className="footer__two">
            <div className="footer__title">
              <p>Make Money with Us</p>
            </div>
            <div className="footer__text">
              <p>Sell products on Amazon</p>
              <p>Sell on Amazon Business</p>
              <p>Sell apps on Amazon</p>
              <p>Become an Affiliate</p>
              <p>Advertise Your Products</p>
              <p>Self-Publish with Us</p>
              <p>Host an Amazon Hub</p>
              <p>See More Make Money with Us</p>
            </div>
          </div>

          <div className="footer__three">
            <div className="footer__title">
              <p>Amazon Payment Products</p>
            </div>
            <div className="footer__text">
              <p>Amazon Business Card</p>
              <p>Shop with Points</p>
              <p>About Amazon</p>
              <p>Reload Your Balance</p>
              <p>Amazon Currency Converter</p>
            </div>
          </div>

          <div className="footer__four">
            <div className="footer__title">
              <p>Let Us Help You</p>
            </div>
            <div className="footer__text">
              <p>Amazon and COVID-19</p>
              <p>Your Account</p>
              <p>About Amazon</p>
              <p>Your Orders</p>
              <p>Shipping Rates & Policies</p>
              <p>Returns & Replacements</p>
              <p>Manage Your Content and Devices</p>
              <p>Amazon Assistant</p>
              <p>Help</p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="footer__text">
          <div>
            <a>Australia </a>
            <a>Brazil </a>
            <a>Canada </a>
            <a>China </a>
            <a>France </a>
            <a>Germany </a>
            <a>Italy </a>
            <a>Japan </a>
            <a>Mexico </a>
            <a>Netherlands </a>
            <a>Poland </a>
            <a>Singapore </a>
            <a>Spain </a>
            <a>Turkey </a>
            <a>United Arab Emirates </a>
            <a>United Kingdom </a>
            <a>United States</a>
          </div>
        </div>
        <div id="services">
          <div className="extra__stuff">
            <div>
              <div className="extra__title">
                <p>AbeBooks Books,</p>
              </div>
              <div className="extra__text">
                <p>Books, art &</p>
                <p>collectibles</p>
              </div>
            </div>

            <div>
              <div className="extra__title">
                <p>Amazon Web Services </p>
              </div>
              <div className="extra__text">
                <p>Scalable Cloud </p>
                <p>Computing Services</p>
              </div>
            </div>

            <div>
              <div className="extra__title">
                <p>Audible </p>
              </div>
              <div className="extra__text">
                <p>Download </p>
                <p>Audio Books</p>
              </div>
            </div>

            <div>
              <div className="extra__title">
                <p>DPReview </p>
              </div>
              <div className="extra__text">
                <p>Digital</p>
                <p>Photography</p>
              </div>
            </div>

            <div>
              <div className="extra__title">
                <p> IMDb </p>
              </div>
              <div className="extra__text">
                <p>Movies, TV </p>
                <p>& Celebrities</p>
              </div>
            </div>
          </div>
          <div className="extra__stuff">
            <div>
              <div className="extra__title">
                <p>Shopbop </p>
              </div>
              <div className="extra__text">
                <p>Designer </p>
                <p>Fashion Brands</p>
              </div>
            </div>

            <div>
              <div className="extra__title">
                <p>Amazon Business </p>
              </div>
              <div className="extra__text">
                <p>Everything For </p>
                <p>cYour Business</p>
              </div>
            </div>

            <div>
              <div className="extra__title">
                <p>Prime Now </p>
              </div>
              <div className="extra__text">
                <p>2-Hour Delivery </p>
                <p>on Everyday Items</p>
              </div>
            </div>

            <div>
              <div className="extra__title">
                <p>Amazon Prime Music </p>
              </div>
              <div className="extra__text">
                <p>90 million songs, ad-free </p>
                <p>Over 15 million podcast episodes</p>
              </div>
            </div>

            <div>
              <div className="extra__title">
                <p> </p>
              </div>
              <div className="extra__text">
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <div className='rights'>
            <div className="tnc">
              <p>Conditions of Use & Sale </p>
              <p>Privacy Notice</p>
              <p>Interest-Based Ads</p>
            </div>
            <p>© 1996-2023, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
