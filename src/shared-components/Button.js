const Button = (props) => {
    const primary = props.primary ? "ctaBtnPrimary" : ""
    const secondary = props.secondary ? "ctaBtnSecondary" : ""
    const handleClick = (evt) => {
        console.log(evt.target)
    }
    return (
        <button className={`call__to__action--btn ${primary} ${secondary}`}
         onClick={handleClick}>{props.title}</button>
    )
}
export default Button