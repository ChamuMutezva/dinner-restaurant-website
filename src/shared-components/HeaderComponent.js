import { Link } from "react-router-dom"
import Linkbtn from './LinkBtn'
import logo from '../assets/images/logo.svg'

//import Button from './Button'
const HeaderComponent = (props) => {
    const secondaryHeader = props.secondaryHeader ? "secondaryHeader" : ""
    const btnTitle = props.secondaryHeader ? "Reserve a place" : "Book a table"
    return (
        <div className={`hero ${secondaryHeader}`}>
            <div className="hero__main">
                <Link to="/">
                    <img className="hero__main__logo" src={logo} alt="welcome to dine" />
                </Link>
                <h1 className="hero__main__title">{props.title}</h1>
                <p className="hero__main__descr">{props.summary}</p>
                <div className="hero__main__btncontainer">
                    {/* <Button title="Book a table" Link to="/reservation" /> 
                    <Link to="/reservation">Book a table</Link> */}
                    <Linkbtn btn_title={btnTitle} />
                </div>
            </div>
        </div>
    )
}
export default HeaderComponent