import NextTrip from "../components/NextTrip";
import ParisImg from '../../../public/img/ParisImage.png'
import GreeceImg from '../../../public/img/GreeceImage.png'
import NorwayImg from '../../../public/img/NorwayImage.png'
import TuscanyImg from '../../../public/img/TuscanyImage.png'   

export default function PopularDestinations() {
    return (
        <div className="popular-destinations">
            <div className="container">
                <div className="top">
                    <div className="left-side">
                        <h5 style={{color:"#1262AE"}}>Plan your next trip</h5>
                        <h6 style={{color:"#303030"}}>Most Popular Destinations</h6>
                    </div>
                    <div className="right-side">
                        <a href="#">
                            <h5 className="h5Medium">View all destinations</h5>
                        </a>
                    </div>
                </div>
                <div className="bottom">
                    <div className="row">
                       <div className="col-3"><NextTrip placeName={"Paris"} placeImg={ParisImg} price={"$699"}/></div>
                       <div className="col-3"><NextTrip placeName={"Greece"} placeImg={GreeceImg} price={"$1079"}/></div>
                       <div className="col-3"><NextTrip placeName={"Norway"} placeImg={NorwayImg} price={"$895"}/></div>
                       <div className="col-3"><NextTrip placeName={"Tuscany"} placeImg={TuscanyImg} price={"$1245"}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}