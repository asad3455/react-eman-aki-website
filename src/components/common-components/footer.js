import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 text-center content">
                        <span className="to-top-wrapper"><a className="to-top" onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }}><i className="fa fa-angle-up"></i></a></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}