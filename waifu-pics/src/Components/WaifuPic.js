import React from 'react'

export default function WaifuPic({ url }) {
    return (
        <img
            className='waifu'
            alt='the chosen waifu in question'
            src={url}
        />
    )
}