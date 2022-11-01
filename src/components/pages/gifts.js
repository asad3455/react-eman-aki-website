export function Gifts() {
    return (
        <section className="gifts section-padding" id="gifts">
            <div className="container">
                <div className="formbold-main-wrapper">
                    <div className="formbold-form-wrapper">
                        <div className="row" style={{ paddingTop: '10px' }}>
                            <div className="text-center">
                                <h2 className="main-title-alt">Send us a message</h2>
                            </div>
                        </div>
                        <form action="https://formbold.com/s/oYXL3" method="POST">
                            <div className="row">
                                <div className="formbold-mb-2">
                                    <div>
                                        <label htmlFor="firstName" className="formbold-form-label"> Name </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="Your full name"
                                            className="formbold-form-input"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="formbold-mb-2">
                                    <label htmlFor="message" className="formbold-form-label">
                                        Message for bride and groom
                                    </label>
                                    <textarea
                                        rows="6"
                                        name="message"
                                        id="message"
                                        className="formbold-form-input"
                                    ></textarea>
                                </div>
                            </div>

                            <div className="row">
                                <button className="formbold-btn">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <section className="gift-section">
                        <div className="text-center gift-section formbold-form-wrapper">
                            <h2 className="main-title-alt" style={{marginTop: 0}}>Gifts</h2>
                            <p className="body-text" style={{padding: 0}}>Your presence at our wedding is the greatest gift you could give us. If you wish to give a gift we will gratefully accept a contribution towards our future.</p>

                            <p className="bank-heading">UK bank account: </p>
                            <div className="bank-border">
                                <p className="bank-details">Name: Mariyam Iqbal</p>
                                <p className="bank-details">Sort code: 30-84-12</p>
                                <p className="bank-details">Account number: 31532860</p>
                            </div>

                            <p className="bank-heading" style={{paddingTop: "15px" }}>Bank of Maldives: </p>
                            <div className="bank-border">
                                <p className="bank-details">Name: Akeed Ahmed</p>
                                <p className="bank-details">Account Number: 7701132600102</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}