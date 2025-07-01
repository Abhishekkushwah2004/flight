

export default function RecommendedTrip({name,price,tripCode,img}) {
    return (
        <div className="recommended-trip">
            <div className="trip-card">
                <div className="trip-image">
                    <img src={img} alt="Trip Image" />
                </div>
                <div className="trip-details">
                    <div className="text">
                        <h4 style={{color:"#424242"}} className="trip-name h4Medium">{name}</h4>
                        <p style={{color:"#999999"}} className="trip-code">{tripCode}</p>
                    </div>
                    <h3 style={{color:"#1262AF"}} className='trip-price h332'>{price}</h3>
                </div>
            </div>
        </div>
    )
}