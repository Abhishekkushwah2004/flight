import DurationIcon from '../../../public/img/icons/Duration.svg'

export default function RecentSearchesDepart({ from, to, date}) {
    return (
        <div className="col-lg-6 col-sm-12 recent-searches-depart">
            <div className="upper-text">
                <h2 className='boldText' style={{ fontWeight: "700 !important" }}>{from}</h2>
                <div className="icon">
                    <img src={DurationIcon} alt="" />
                </div>
                <h2 className='boldText' style={{ fontWeight: "700" }}>{to}</h2>
            </div>
            <div className="bottom-text">
                <h4>Depart on: <span style={{fontWeight:"400"}}> {date}</span></h4>
            </div>
        </div>
    );
}