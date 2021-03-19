import logo from '../assets/images/logo.svg'
import Button from '../shared-components/Button'
import '../styles/style.css'

const Header = () => {
    return (
        <header>
            <div className="hero">
               
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