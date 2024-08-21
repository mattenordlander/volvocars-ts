import { useEffect, useState } from "react";
import AgedanCards from "../AgendaCards";
import agendaDataEn from "./data/agendaEn.json";
import agendaDataSwe from "./data/agendaSwe.json";

type EventScheduleProp ={
  eng:boolean
}

export default function EventSchedule({eng}:EventScheduleProp) {

  const [agendaData, setAgendaData] = useState(agendaDataEn);

  useEffect(()=>{
    eng ? setAgendaData(agendaDataEn) : setAgendaData(agendaDataSwe)
  },[eng])

  return (
    <div>
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
