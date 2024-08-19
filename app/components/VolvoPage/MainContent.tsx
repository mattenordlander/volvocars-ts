'use-client'

import BeforeMain from "./states/BeforeMain";
import LiveMain from "./states/LiveMain";


type mainContentProp = {
    title:string;
    description:string
}

export default function MainContent({title, description}:mainContentProp){
    return(
<> 
   <LiveMain />     
        <div className="w-100 flex align-center justify-center flex-col px-6 gap-y-10 my-10">
            <h1 className="text-center text-6xl font-bold">{title}</h1>
            <p className="text-center">{description}</p>
            <button className="btn">Add to calendar</button>
        </div>
        </>
    )
}