export function Venue() {
    return (
        <section id="map" className="map section-padding">
            <div className="text-center">
                <h2 className="main-title-alt">Venue:</h2>
            </div>
            <div className="text-center">
                <p className="body-text">Farukolhufushi, Hulhumalé Maldives</p>
            </div>
            <div id="gm-map-canvas" style={{padding: '10px, 10px, 10px, 10px'}}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.769213137763!2d73.53674491130866!3d4.231503600104077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b3f81eef184ec51%3A0x99058410f9d8cb17!2sFarukolhufushi!5e0!3m2!1sen!2suk!4v1667061839954!5m2!1sen!2suk" width="100%" height="500" style={{border: '20'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p></p>
        </section>
    )
}