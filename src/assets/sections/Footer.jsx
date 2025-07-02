import Logo from '../../../public/img/icons/Logo.svg';
import FacebookIcon from '../../../public/img/icons/facebook.svg';
import InstagramIcon from '../../../public/img/icons/instagram.svg';
import TwitterIcon from '../../../public/img/icons/twitter.svg';

export default function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                     <div className="left-side">
                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                            <h5 style={{color:"#FFFFFF"}} className='h5Regular footer-text'>Fickle Flight is your one-stop travel portal. We offer hassle free flight and hotel bookings. We also have all your flight needs in you online shop.</h5>
                            <div className="social-media">
                                <ul>
                                    <li><a href="#"><img src={FacebookIcon} alt="" /></a></li>
                                    <li><a href="#"><img src={InstagramIcon} alt="" /></a></li>
                                    <li><a href="#"><img src={TwitterIcon} alt="" /></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="center">

                        </div>
                        <div className="right-side">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-4">
                                    <h4 style={{color:'#ffffff'}} className='h4Medium'>Company</h4>
                                    <ul>
                                        <li><a href="#"><p>About Us</p></a></li>
                                        <li><a href="#"><p>News</p></a></li>
                                        <li><a href="#"><p>Careers</p></a></li>
                                        <li><a href="#"><p>How we work</p></a></li>
                                    </ul>
                                </div>
                                 <div className="col-lg-4 col-md-6 col-sm-4">
                                    <h4 style={{color:'#ffffff'}} className='h4Medium'>Support</h4>
                                    <ul>
                                        <li><a href="#"><p>Account</p></a></li>
                                        <li><a href="#"><p>Support Center</p></a></li>
                                        <li><a href="#"><p>FAQ</p></a></li>
                                        <li><a href="#"><p>Accessibility</p></a></li>
                                    </ul>
                                </div>
                                 <div className="col-lg-4 col-md-6 col-sm-4">
                                    <h4 style={{color:'#ffffff'}} className='h4Medium'>More</h4>
                                    <ul>
                                        <li><a href="#"><p>Covid Advisory</p></a></li>
                                        <li><a href="#"><p>Airline Fees</p></a></li>
                                        <li><a href="#"><p>Tips</p></a></li>
                                        <li><a href="#"><p>Quarantine Rules</p></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </footer>
    )
}