//import { Link } from "react-router-dom"
//import logo from '../assets/images/logo.svg'
import HeaderComponent from '../shared-components/HeaderComponent'
import '../styles/style.css'

const Header = () => {
    return (
        
            <header>
                <HeaderComponent title="Exquisite dining since 1989"
                                 summary="Experience our seasonal menu in beautiful
                                  country surroundings. Eat the freshest produce from
                                 the comfort of our farmhouse."
                     />
            </header>
        
    )
}
export default Header