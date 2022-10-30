import {useState} from 'react';


export function Header() {
    const [isActive, setIsActive] = useState(false);

    function setActiveTab(e) {
        e.preventDefault()        
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
                                    <li><a href="timeline" className="login">Our Story</a></li>
                                    <li><a href="events" className="login">The Big Day</a></li>
                                    <li><a href="venue" className="login">Venue</a></li>
                                    <li><a href="gifts" className="login">Gifts</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="navicon">
                            <a className={isActive ? "nav-toggle active" : "nav-toggle"} onClick={setActiveTab} href="#"><span></span></a>
                        </div>
                    </div>
                </header>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="hero-content text-center">
                            <img src={require('../../img/logo.png')} />
                            <p>Our Wedding</p>
                            <h4>Eman & Aki</h4>
                        </div>
                    </div>
                </div>
                <div className="down-arrow floating-arrow"><a href="#invitation"><i className="fa fa-angle-down"></i></a></div>
                <div className="row">
                    <div className="col-sm-4 hidden-xs"></div>
                    <div className="col-sm-4 hidden-xs"></div>
                </div>
            </div>
        </section>
    )
}