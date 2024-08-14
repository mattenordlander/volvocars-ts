'use-client'

type mainContentProp = {
    title:string;
    description:string
}

export default function MainContent({title, description}:mainContentProp){
    return(
<> 
        <div className="bg-[url('/images/video-thumbnail.png')] flex align-center justify-center bg-cover bg-no-repeat bg-center">
<h1 className="text-6xl font-bold text-white py-60">13:18:34</h1>
        </div>
        <div className="w-100 flex align-center justify-center flex-col px-6 gap-y-10 my-10">
            <h1 className="text-center text-6xl font-bold">{title}</h1>
            <p className="text-center">{description}</p>
            <button className="btn">Add to calendar</button>
        </div>
        </>
    )
}