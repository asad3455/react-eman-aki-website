import {useState} from 'react';
import { Link } from 'react-router-dom';


export function Header() {
    const [isActive, setIsActive] = useState(false);

    function setActiveTab(e) {
        setIsActive(current => !current);
    }

    return (
        <section className="hero">
            <section className="navigation">
                <header>
                    <div className="header-content">
                        <div className={isActive ? "header-nav open" : "header-nav"}>
                            <nav>
                                <ul className="member-actions">
                                    <li><Link to="/" className="login" onClick={setActiveTab}>Home</Link></li>
                                    <li><Link to="/timeline" className="login" onClick={setActiveTab}>Our Story</Link></li>
                                    <li><Link to="/events" className="login" onClick={setActiveTab}>The Big Day</Link></li>
                                    <li><Link to="/venue" className="login" onClick={setActiveTab}>Venue</Link></li>
                                    <li><Link to="/gifts" className="login" onClick={setActiveTab}>Gifts</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="navicon">
                            <a className={isActive ? "nav-toggle active" : "nav-toggle"} onClick={setActiveTab}><span></span></a>
                        </div>
                    </div>
                </header>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="hero-content text-center">
                            <img src={require('../../img/logo.png')} />
                            <p style={{margin: 0}}>Our Wedding</p>
                            <h4>Aki & Eman</h4>
                        </div>
                    </div>
                </div>
                <div className="down-arrow floating-arrow"><i className="fa fa-angle-down"></i></div>
                <div className="row">
                    <div className="col-sm-4 hidden-xs"></div>
                    <div className="col-sm-4 hidden-xs"></div>
                </div>
            </div>
        </section>
    )
}