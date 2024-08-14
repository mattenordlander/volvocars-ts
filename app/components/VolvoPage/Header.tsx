"use client"

type headerProp = {
    changeText:() => void
}

import React from 'react';
export default function Header({changeText}:headerProp){
    return(
        <div className=' flex items-center px-4 py-5 justify-between'>
            <img src="/images/black_volvologo.svg" alt="" />
            <button onClick={changeText}>CN | EN</button>
        </div>
    )
}