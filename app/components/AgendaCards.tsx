
type AgendaProp = {
    time: string;
    title: string;
    speaker:string;
    description:string;
    card:number
}


export default function agedanCards({time, title, speaker, description, card}: AgendaProp){
    return(
        <div key={card} className="flex-col border-b-2 border-slate-200 my-8 pb-7">
            <h1 className="text-5xl font-bold mb-8">{time}</h1>
            <div className="mb-5">
            <h2 className="text-xl font-bold ">{title}</h2>
            <h2 className="text-slate-500">{description}</h2>
            </div>
            
            <p className="text-slate-500">{speaker}</p>
        </div>
    )
}