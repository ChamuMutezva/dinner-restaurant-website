//import heroMobile from '../assets/images/homepage/hero-bg-mobile.jpg'
//import heroMobile2 from '../assets/images/homepage/hero-bg-mobile@2x.jpg'
//import heroTablet from '../assets/images/homepage/hero-bg-tablet.jpg'
//import heroTablet2 from '../assets/images/homepage/hero-bg-tablet@2x.jpg'
//import heroDesktop from '../assets/images/homepage/hero-bg-desktop.jpg'
//import heroDesktop2 from '../assets/images/homepage/hero-bg-desktop@2x.jpg'
import logo from '../assets/images/logo.svg'
import Button from '../shared-components/Button'
import '../styles/style.css'

const Header = () => {
    return (
        <header>
            <div className="hero">
                {/*
                <picture>
                    <source media="(max-width: 680px)" srcSet={`${heroMobile}, ${heroMobile2}`} />
                    <source media="(max-width: 1080px)" srcSet={`${heroTablet}, ${heroTablet2}`} />
                    <source media="(min-width: 1081px)" srcSet={`${heroDesktop}, ${heroDesktop2}`} />
                    <img src={heroMobile} srcSet={`${heroMobile}, ${heroTablet}, ${heroDesktop}`}
                     alt="Enjoy your meal today"/>
                </picture>
                */}
                <div className="hero__main">
                    <img className="hero__main__logo" src={logo} alt="welcome to dine" />

                    <h1 className="hero__main__title"> Exquisite dining since 1989</h1>
                    <p className="hero__main__descr">
                        Experience our seasonal menu in beautiful country surroundings.
                        Eat the freshest produce from
                        the comfort of our farmhouse.
                    </p>
                    <div className="hero__main__btncontainer">
                        <Button title="Book a table" />
                    </div>

                </div>
            </div>
        </header>
    )
}
export default Header