import logo from '../assets/images/logo.svg'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__img">
                    <img className="hero__main__logo footer__logo" src={logo} alt="welcome to dine" />
                </div>
                <div className="contact">
                    <address className="address">
                        <p className="address__list">
                            <span>Marthwaite, Sedbergh</span>
                            <span>Cumbria</span>
                            <span>+00 44 123 4567</span>
                        </p>
                    </address>
                    <div className="open__times">
                        <span> Open Times</span>
                        <span>Mon - Fri: 09:00 AM - 10:00 PM</span>
                        <span> Sat - Sun: 09:00 AM - 11:30 PM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer