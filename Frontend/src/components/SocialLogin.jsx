import React from 'react'

export default function SocialLogin(props) {

    const { text, image , alt } = props

    return (
        <button className='social-button'>
            <img className='social-icon' src={image} alt={alt} />
            {text}
        </button>
    )
}
