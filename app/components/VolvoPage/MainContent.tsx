'use-client'

export default function MainContent(){
    return(
<> 
        <div className="bg-[url('/images/video-thumbnail.png')] flex align-center justify-center bg-cover bg-no-repeat bg-center">
<h1 className="text-6xl font-bold text-white py-60">13:18:34</h1>
        </div>
        <div className="w-100 flex align-center justify-center flex-col px-6 gap-y-10 my-10">
            <h1 className="text-center text-6xl font-bold">90/90</h1>
            <p className="text-center">Join us September 4 as we celebrate <br /> two flagships, the EX90 and new XC90</p>
            <button className="btn">Add to calendar</button>
        </div>
        </>
    )
}