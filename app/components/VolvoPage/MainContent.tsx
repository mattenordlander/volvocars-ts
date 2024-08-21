'use-client'

import { useEffect, useState } from "react";
import BeforeMain from "./states/BeforeMain";
import LiveMain from "./states/LiveMain";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../utils/firebase";


type mainContentProp = {
    title:string;
    description:string;
}

export default function MainContent({title, description}:mainContentProp){

const [state, setState] = useState<string>('before');

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
<> 
{state === "before" ? <BeforeMain /> : <LiveMain />}   
        <div className="w-100 flex align-center justify-center flex-col px-6 gap-y-10 my-10">
            <h1 className="text-center text-6xl font-bold">{title}</h1>
            <p className="text-center">{description}</p>
            <button className="btn">Add to calendar</button>
        </div>
        </>
    )
}