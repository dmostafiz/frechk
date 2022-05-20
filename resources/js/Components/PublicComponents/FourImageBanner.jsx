import React from 'react'
import BannerImage from './BannerImage';

export default function FourImageBanner() {
    return (
        <div className="row">
            <div className="col-md-3 col-6">
                <div className="products-box">
                    <a href="listing.html"> 
                        <BannerImage
                            image='/img/4.jpeg'
                            title='Indian chicken masala'
                            subtitle='Testy indian chicken masala'
                        />
                    </a>

                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className="products-box">
                    <a href="listing.html">
                        <BannerImage
                            image='/img/5.jpeg'
                            title='Italian mix'
                            subtitle='Thats a great food'
                        />
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className="products-box">
                    <a href="listing.html">
                        <BannerImage image='/img/7.jpeg' />
                    </a>
                </div>
            </div>
            <div className="col-md-3 col-6">
                <div className="products-box">
                    <a href="listing.html">
                        <BannerImage
                            image='/img/8.jpeg'
                            title='Fish BBQ'
                            subtitle=''
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
