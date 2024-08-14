import AgedanCards from "../AgendaCards";
import agendaData from "./data/agenda.json";

export default function EventSchedule() {
  return (
    <div className=" p-5">
      <h1>Event Scheddule</h1>
      {agendaData.map(({ time, title, speaker, description, card }) => (
        <AgedanCards
      card={card}
          time={time}
          speaker={speaker}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
}
