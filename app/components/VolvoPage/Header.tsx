"use client"


import React from 'react';
export default function Header(){
    return(
        <div className=' flex items-center px-4 py-5 justify-between'>
            <img src="/images/black_volvologo.svg" alt="" />
            <button>CN | EN</button>
        </div>
    )
}