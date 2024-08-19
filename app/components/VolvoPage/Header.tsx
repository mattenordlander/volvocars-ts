"use client"

type headerProp = {
    toggleLanguage:() => void
}

import React from 'react';
export default function Header({toggleLanguage}:headerProp){
    return(
        <div className=' flex items-center px-4 py-5 justify-between'>
            <img src="/images/black_volvologo.svg" alt="" />
            <button onClick={toggleLanguage}>CN | EN</button>
        </div>
    )
}