import React from 'react'
import CarouselImage from './CarouselImage'

export default function BannerCarousel() {
    return (
        <div className="osahan-slider pl-4 pt-3">
            <div className="owl-carousel homepage-ad owl-theme">
                <div className="item rounded shadow">
                    <a href="listing.html">
                        <CarouselImage image='/img/1.jpeg' title='' subtitle='' />
                        {/* <img className="img-fluid rounded" src="/img/1.jpeg" /> */}
                    </a>
                </div>
                <div className="item">
                    <a href="listing.html">
                        <CarouselImage image='/img/2.jpeg' title='' subtitle='' />

                        {/* <img className="img-fluid rounded" src="/img/1.jpeg" /> */}
                    </a>
                </div>
                <div className="item">
                    <a href="listing.html">
                        <CarouselImage image='/img/3.jpeg' title='' subtitle='' />

                        {/* <img className="img-fluid rounded" src="/img/1.jpeg" /> */}
                    </a>
                </div>
            </div>
        </div>
    )
}
