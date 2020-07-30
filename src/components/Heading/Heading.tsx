import React from 'react'

const Heading = (props: any) => {
    const { title, description } = props;
    return (
        <div className="heading-wrapper">
            <h2 className="heading-title">{title}</h2>
            <p className="heading-description">{description}</p>
        </div>
    )
}

export default Heading
