import React from 'react'

export default function CarouselImage({image, title = '', subtitle = ''}) {
  return (
    <div className="single-carousel rounded-5" style={{backgroundImage: `url(${image})`}}>
       <div className="single-carousel-inner">
          <span className="inner-title">{title}</span> <br />
          <span className="inner-subtitle text-secondary font-weight-normal">{subtitle}</span>
       </div>
    </div>
  )
}
