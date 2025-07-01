import PrepareYourTrip from "../components/PrepareYourTrip";
import RecentSearchesDepart from "../components/RecentSearchesDepart";
import HotelIcon from '../../../public/img/icons/HotelIcon.svg'
import AttractionsIcon from '../../../public/img/icons/AttractionsIcon.svg'
import EatsIcon from '../../../public/img/icons/EatsIcon.svg'
import CommuteIcon from '../../../public/img/icons/CommuteIcon.svg'
import TaxiIcon from '../../../public/img/icons/TaxiIcon.svg'
import MoviesIcon from '../../../public/img/icons/MoviesIcon.svg'

export default function RecentSearches() {
    return (
        <div className="recent-searches">
            <div className="container">
                <div className="heading">
                    <h5 style={{ color: "#303030" }}>Recent Searches</h5>
                </div>
                <div className="searches">
                    <RecentSearchesDepart from={"SIN"} to={"LAX"} date={'7 Sep 2021'}/>
                    <RecentSearchesDepart from={"MY"} to={"DUB"} date={'10 Sep 2021'}/>
                </div>
                <div className="Prepare-your-trip">
                     <h5 className="h5Regular" style={{textTransform:"uppercase",color:"#CECECE"}}>Prepare for your trip</h5>
                     
                     <div className="trip-collection">
                        <PrepareYourTrip name={"Hotel"} icon={HotelIcon}/>
                        <PrepareYourTrip name={"Attractions"} icon={AttractionsIcon}/>
                        <PrepareYourTrip name={"Eats"} icon={EatsIcon}/>
                        <PrepareYourTrip name={"Commute"} icon={CommuteIcon}/>
                        <PrepareYourTrip name={"Taxi"} icon={TaxiIcon}/>
                        <PrepareYourTrip name={"Movies"} icon={MoviesIcon}/>
                     </div>
                </div>
            </div>
        </div>
    );
}