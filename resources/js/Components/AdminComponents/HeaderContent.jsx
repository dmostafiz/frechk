import React from 'react'

export default function HeaderContent({title, subtitle, breadcrumbs, button}) {
    return (
        <div className="flex-wrap d-flex justify-content-between align-items-center">
            <div>
                {title && title}
                {subtitle && subtitle}
                {breadcrumbs && breadcrumbs}
            </div>
            <div>
                {button && button}
            </div>
        </div>
    )
}
