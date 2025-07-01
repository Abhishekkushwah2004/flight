import RecommendedTrip from "../components/RecommendedTrip";
import BaliImg from '../../../public/img/Bali.png'
import SwissImg from '../../../public/img/SwitzerlandImage.png'
import BoracayImg from '../../../public/img/BoracayImage.png'
import PalawanImg from '../../../public/img/PalawanImage.png'
import SectionHeading from "../components/SectionHeading";

export default function RecommendedHolidays() {
    return (
        <div className="recommended-holidays">
            <div className="container">
                 <SectionHeading mainHeading={" Recommended Holidays"} viewLink={'View all holidays'}/>
                <div className="bottom">
                    <div className="row">
                        <div className="col-3">
                            <RecommendedTrip name={"Bali"} price={"$899"} tripCode={"4D3N"} img={BaliImg}/>
                        </div>
                        <div className="col-3">
                             <RecommendedTrip name={"Swiss"} price={"$900"} tripCode={"6D5N"} img={SwissImg}/>
                        </div>
                        <div className="col-3">
                             <RecommendedTrip name={"Boracay"} price={"$699"} tripCode={"5D4N"} img={BoracayImg}/>
                        </div>
                        <div className="col-3">
                             <RecommendedTrip name={"Palawan"} price={"$789"} tripCode={"4D3N"} img={PalawanImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}