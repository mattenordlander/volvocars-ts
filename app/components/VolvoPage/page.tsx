'use client'

import MainContent from "./MainContent";
import Header from "./Header";
import EventSchedule from "./EventSchedule";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import pageLanguage from "./data/pageLanguage.json";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase";


export default function Page(){


const [eng, setEng] = useState<boolean>(true);
const [language, setLanguage] = useState(pageLanguage.en[0]);
const [state, setState] = useState<string>('before');

  const toggleLanguage = ()=>{
    setEng((prevEng) =>{
        const newEng = !prevEng;
        setLanguage(newEng ? pageLanguage.en[0] : pageLanguage.swe[0]);
        return newEng
    })
  }

useEffect(() => {
    const docRef = doc(db, "StreamStatus", "state");
  
    const unsubscribe = onSnapshot(docRef, (snapshot) => {
        console.log("Snapshot received:", snapshot.data());
      const data = snapshot.data();
      if (data) {
        setState(data.state);
      }

    });
  
   
    return () => unsubscribe();
  }, []);

    return(
    <div className={`m-auto ${state === 'before' ? '' : 'xl:w-8/12'}`}>
<Header toggleLanguage={toggleLanguage}/>
    <MainContent state={state} title = {language.title} description={language.description}/>
    <div className="px-7">
        <EventSchedule eng={eng} state={state}/>
        <Footer footerCookie={language.footerCookie} state={state}/>
    </div>
</div>
    )
}