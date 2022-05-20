import React from 'react'

export default function BannerImage({ image, title = '', subtitle = '' }) {
  return (
    <div className="single-banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="single-banner-inner">
        {title &&<><span className="inner-title">{title}</span>  <br /></> }
        {subtitle && <span className="inner-subtitle text-secondary font-weight-normal">{subtitle}</span>}    
      </div>
    </div>
  )
}
