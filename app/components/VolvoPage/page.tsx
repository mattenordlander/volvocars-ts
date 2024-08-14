import MainContent from "./MainContent";
import Header from "./Header";
import EventSchedule from "./EventSchedule";
import Footer from "./Footer";

export default function Page(){
    return(
<>
<Header/>
<MainContent />
<div className="px-7">
    <EventSchedule />
    <Footer/>
</div>
</>
    )
}