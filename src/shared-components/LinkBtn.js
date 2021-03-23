import { Link } from "react-router-dom"

const LinkBtn = (props) => {
    const centerbtn = props.centerBtn ? "centerBtn" : ""
    const primary = props.primary ? "ctaBtnPrimary" : ""
    return (
        <Link to="/reservation" className={`linkbtn ${primary} ${centerbtn}`}>{props.btn_title}</Link>
    )
}
export default LinkBtn