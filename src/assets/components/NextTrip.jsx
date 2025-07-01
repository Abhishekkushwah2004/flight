

export default function NextTrip({placeName,placeImg,price}) {
    return (
        <div className="next-trip">
            <div className="img">
                <img src={placeImg} alt="" />
            </div>
            <div className="text">
                <div className="place">
                    <h4 style={{color:"#ffff"}}>{placeName}</h4>
                </div>
                <div className="right-price-side">
                    <h1 style={{color:"#ffff"}}>FROM</h1>
                    <h3 style={{color:"#ffff"}} className="h338">{price}</h3>
                </div>
            </div>
        </div>
    )
}