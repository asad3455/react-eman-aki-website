import { fadeInRight, fadeInLeft } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

export function Events() {
    const styles = StyleSheet.create({
        fadeInLeft: {
          animationName: fadeInLeft,
          animationDuration: '1s'
        },
        fadeInRight: {
            animationName: fadeInRight,
            animationDuration: '1s'
          }
        })

    return (
        <section className="events section-padding" id="events">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h2 className="main-title-alt">Events</h2>
                    </div>
                </div>
                <div className="events-border">
                    <div className="row">
                        <div className="text-center">
                            <p className="sub-title">20th December</p>
                            <div className={css(styles.fadeInLeft)}>
                                <h5>Meet and greet <span className="time">17:30 - 19:45</span></h5>
                            </div>
                            <div className={css(styles.fadeInRight)}>
                                <h5>Cake cutting <span className="time">19:45 - 20:00</span></h5>
                            </div>
                            <div className={css(styles.fadeInLeft)}>
                                <h5>The First Dance <span className="time">20:00 - 20:15</span></h5>
                            </div>
                            <div className={css(styles.fadeInRight)}>
                                <h5>Entertainment <span className="time">20:15 - 21:00</span></h5>
                            </div>
                            <div className={css(styles.fadeInRight)}>
                                <h5>Boduberu <span className="time">21:00 - 22:00</span></h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="text-center">
                            <p className="sub-title">Other events</p>
                            <div className={css(styles.fadeInRight)}>
                                <h5>Drinks and Canapé <span className="time">17:30 - 19:00</span></h5>
                            </div>
                            <div className={css(styles.fadeInLeft)}>
                                <h5>Dinner Buffet <span className="time">19:00 - 22:00</span></h5>
                            </div>
                            <div className={css(styles.fadeInRight)}>
                                <h5>Affan and the Band <span className="time">17:30 - 19:30</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}