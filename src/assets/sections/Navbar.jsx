import './style/navbar.css'
import '../../App.css'
import LogoImg from '../../../public/img/logo.png'
import ProfileImg from '../../../public/img/profile picture.png'
import NotificationImg from '../../../public/img/icons/notification bell.svg'
import { useState } from 'react'

export function Navbar() {

    let [slideBar,setSlideBar]=useState(false);

    let SlideOpen=()=>{
        setSlideBar(true)
        console.log(slideBar) 
    }
    let SlideClose=()=>{
        setSlideBar(false)
        console.log(slideBar) 
    }
    console.log(slideBar) 

    return (
        <>
            <div className="header">
                <div style={ slideBar ? {display:"inline-block",transform: "translateX(0)"} : { transform: "translateX(100%)"} } className="menu-slide-bar">
                    <div className="menus">
                                <div className="menu">
                                    <ul>
                                        <li><a href="#"><h1>Explore</h1></a></li>
                                        <li><a href="#"><h1>Search</h1></a></li>
                                        <li><a href="#"><h1>Hotels</h1></a></li>
                                        <li><a href="#"><h1>Offers</h1></a></li>
                                    </ul>
                                </div>
                                <div className="profile profile-content">
                                    <ul>
                                        <li className='notification'><a href="#"><img src={NotificationImg} alt="notification-img" /></a></li>
                                        <li className='profile'><a href="#"><img src={ProfileImg} alt="Profile-img" /></a></li>
                                    </ul>
                                    <div className="close">
                                        <i onClick={()=>SlideClose()} style={{color:"#1262AE"}} className="fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                            </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 left-side">
                            <div className="logo">
                                <a href="#">
                                    <img src={LogoImg} alt="logo-img" />
                                </a>
                            </div>
                            <div onClick={()=>SlideOpen()} className="slid-bar">
                                <div className="icon">
                                    <i style={{color:"#1262AE"}} className="fa-solid fa-bars"></i>
                                </div>
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