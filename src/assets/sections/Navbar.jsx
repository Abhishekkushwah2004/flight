import './style/navbar.css'
import '../../App.css'
import LogoImg from '../../../public/img/logo.png'
import ProfileImg from '../../../public/img/profile picture.png'
import NotificationImg from '../../../public/img/icons/notification bell.svg'

export function Navbar() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-6 left-side">
                            <div className="logo">
                                <a href="#">
                                    <img src={LogoImg} alt="logo-img" />
                                </a>
                            </div>
                        </div>
                        <div className="col-6 right-side">
                            <div className="menus">
                                <div className="menu">
                                    <ul>
                                        <li><a href="#"><h1>Explore</h1></a></li>
                                        <li><a href="#"><h1>Search</h1></a></li>
                                        <li><a href="#"><h1>Hotels</h1></a></li>
                                        <li><a href="#"><h1>Offers</h1></a></li>
                                    </ul>
                                </div>
                                <div className="profile">
                                    <ul>
                                        <li className='notification'><a href="#"><img src={NotificationImg} alt="notification-img" /></a></li>
                                        <li className='profile'><a href="#"><img src={ProfileImg} alt="Profile-img" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}