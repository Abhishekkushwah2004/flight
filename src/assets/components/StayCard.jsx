import VideoIcon from "../../../public/img/icons/videoIcon.svg";
import Star from '../../../public/img/icons/star.svg';

export default function StayCard({img, name, subTitle, price, rating, reviews}) {
    return (
        <div className="stayCard">
            <div className="stay-image">
                <img src={img} alt="Stay" />
            </div>
            <div className="stay-details">
                <div className="left-side">
                    <p style={{ color: "#8E8E94" }} className="h5Regular">{subTitle}</p>
                    <h4 style={{ color: "#303030" }} className="h4Medium h422">{name}</h4>
                    <h5 style={{ color: "#303030" }} className="h5Regular">{price}/night</h5>
                </div>
                <div className="right-side">
                    <div className="icon">
                        <img src={VideoIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="rating">
                <div className="icon">
                    <img src={Star} alt="" />
                </div>
                <p className="pMedium">{rating}</p>
                <p style={{color:"#1262AF"}} className="reviewsCount">({reviews} reviews)</p>
            </div>
            <div className="button">
                <button>MORE DETAILS</button>
            </div>
        </div>
    )
}