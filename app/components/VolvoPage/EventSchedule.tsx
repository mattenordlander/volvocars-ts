import { useEffect, useState } from "react";
import AgedanCards from "../AgendaCards";
import agendaDataEn from "./data/agendaEn.json";
import agendaDataSwe from "./data/agendaSwe.json";

type EventScheduleProp ={
  eng:boolean;
  state:string
}

export default function EventSchedule({eng,state}:EventScheduleProp) {

  const [agendaData, setAgendaData] = useState(agendaDataEn);

  useEffect(()=>{
    eng ? setAgendaData(agendaDataEn) : setAgendaData(agendaDataSwe)
  },[eng])

  return (
    <div className={`m-auto ${state === 'before' ? 'xl:w-9/12' : ''}`}>
      <h1>Event Scheddule</h1>
      {agendaData.map(({ time, title, speaker, description, card }) => (
        <AgedanCards
      key={card}
          time={time}
          speaker={speaker}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
