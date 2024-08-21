'use client'

import MainContent from "./MainContent";
import Header from "./Header";
import EventSchedule from "./EventSchedule";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import pageLanguage from "./data/pageLanguage.json";


export default function Page(){


const [eng, setEng] = useState<boolean>(true);
const [language, setLanguage] = useState(pageLanguage.en[0]);

  const toggleLanguage = ()=>{
    setEng((prevEng) =>{
        const newEng = !prevEng;
        setLanguage(newEng ? pageLanguage.en[0] : pageLanguage.swe[0]);
        return newEng
    })
  }

    return(
<>
<Header toggleLanguage={toggleLanguage}/>
<div className="m-auto xl:w-9/12">
    <MainContent title = {language.title} description={language.description}/>
    <div className="px-7">
        <EventSchedule eng={eng}/>
        <Footer footerCookie={language.footerCookie}/>
    </div>
</div>
</>
    )
}