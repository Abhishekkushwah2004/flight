


export default function PrepareYourTrip({name,icon}) {
    return (
        <div className="PrepareTrip">
            <div className="icon">
                <img src={icon} alt="" />
            </div>
            <h1 style={{color:"#8E8E94"}}>{name}</h1>
        </div>
    );
}