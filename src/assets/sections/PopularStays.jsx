import SectionHeading from "../components/SectionHeading";
import StayCard from "../components/StayCard";
import MatterhornSuitesImg from '../../../public/img/MatterhornSuitesImage.png';
import DiscoveryShoresImg from '../../../public/img/DiscoveryShoresImage.png';
import ArcticHutImg from '../../../public/img/ArcticHutImage.png';
import LakeLouiseInnImg from '../../../public/img/LakeLouiseImage.png';

export default function PopularStays() {
    return (
        <div className="PopularStays">
            <div className="container">
                <SectionHeading mainHeading={"Popular Stays"} viewLink={'View all stays'}/>
                <div className="row">
                    <div className="col-3">
                        <StayCard img={MatterhornSuitesImg} name={"Matterhorn Suites"} subTitle={"Entire bungalow"} price={'$575'} rating={"4.9"} reviews={'60'}/>
                    </div>
                   <div className="col-3">
                        <StayCard img={DiscoveryShoresImg} name={"Discovery Shores"} subTitle={"2-Story beachfront suite"} price={'$360'} rating={"4.8"} reviews={'116'}/>
                    </div>
                    <div className="col-3">
                        <StayCard img={ArcticHutImg} name={"Arctic Hut"} subTitle={"Single deluxe hut"} price={'$420'} rating={"4.7"} reviews={'78'}/>
                    </div>
                    <div className="col-3">
                        <StayCard img={LakeLouiseInnImg} name={"Lake Louise Inn"} subTitle={"Deluxe King Room"} price={'$244'} rating={"4.6"} reviews={'63'}/>
                    </div>
                </div>
            </div>
        </div>
    );
}