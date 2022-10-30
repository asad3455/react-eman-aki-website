export function Timeline() {
    return (
        <section className="timeline section-padding" id="timeline">
            <div className="text-center">
                <h2 className="main-title-alt">Our Story</h2>
            </div>
            <div className="wrapper">
                <img className="timeline-image" alt="nusery" src={require('../../img/nusery.png')} />
                <div className="row row-1">
                    <section>
                        <p className="time">(Galolhu Madharusa - 1999)</p>
                        <div className="details text-center">
                            <h4>Try and spot us!</h4>
                        </div>
                    </section>
                </div>
                <img className="timeline-image" alt="first-pic" src={require('../../img/firstpic.png')} />
                <div className="row row-1">
                    <section>
                        <p className="time">(Liverpool - 2020)</p>
                        <div className="details text-center">
                            <h4>Our paths finally crossed</h4>
                        </div>
                    </section>
                </div>
                <img className="timeline-image" alt="first-dating" src={require('../../img/dating.jpg')} />
                <div className="row row-1">
                    <section>
                        <p className="time">(Birmingham - 2021)</p>
                        <div className="details text-center">
                            <h4>Beginning of our journey</h4>
                        </div>
                    </section>
                </div>
                <img className="timeline-image" alt="engagement" src={require('../../img/engagement.png')} />
                <div className="row row-1">
                    <section>
                        <p className="time">(Bath - 2021)</p>
                        <div className="details text-center">
                            <h4>The day we got engaged</h4>
                        </div>
                    </section>
                </div>
                <img className="timeline-image" alt="anniversary" src={require('../../img/anniversary.png')} />
                <div className="row row-1">
                    <section>
                        <p className="time">(Birmingham - 2022)</p>
                        <div className="details text-center">
                            <h4>First anniversary</h4>
                        </div>
                    </section>
                </div>
                <img className="timeline-image" alt="morocco" src={require('../../img/camel.png')} />
                <div className="row row-1 text-center">
                    <section>
                        <p className="time">(Morocco - 2022)</p>
                        <div className="details text-center">
                            <h4>To good times Insha'Allah</h4>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}