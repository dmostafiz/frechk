import React from 'react'

export default function CarouselImage({image, title = '', subtitle = ''}) {
  return (
    <div className="single-carousel rounded-5" style={{backgroundImage: `url(${image})`}}>
       <div className="single-carousel-inner">
          <span className="inner-title">This is a great food</span> <br />
          <span className="inner-subtitle text-secondary font-weight-normal">This is a great food</span>
       </div>
    </div>
  )
}
