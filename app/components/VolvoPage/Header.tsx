"use client"

import Image from 'next/image';
import sweFlag from '../../../public/images/swe-flag.svg';
import engFlag from '../../../public/images/flag-eng.svg';


type headerProp = {
    toggleLanguage:() => void;
    eng:boolean;
}

export default function Header({toggleLanguage, eng}:headerProp){

    return(
        <div className=' flex items-center px-4 py-5 justify-between'>
            <Image src="/images/black_volvologo.svg" alt="" width={120} height={0}/>
            <div className='flex gap-5'>
                <Image src={eng ? engFlag : sweFlag} alt='flag' width={25}  height={0}/>
                <button onClick={toggleLanguage}>SWE | EN</button>
            </div>
        </div>
    )
}