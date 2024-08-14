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

    const changeText = ()=>{
        setEng(!eng)
        if(!eng) setLanguage(pageLanguage.swe[0]);
        if (eng) setLanguage(pageLanguage.en[0]);
    };

    useEffect(()=>{
        changeText();
    },[])

    return(
<>
<Header changeText={changeText}/>
<MainContent title = {language.title} description={language.description}/>
<div className="px-7">
    <EventSchedule />
    <Footer footerCookie={language.footerCookie}/>
</div>
</>
    )
}