import { Link } from "react-router-dom"
const LinkBtn = (props) => {
    return (
        <Link to="/reservation" className="linkbtn">{props.btn_title}</Link>
    )
}
export default LinkBtn