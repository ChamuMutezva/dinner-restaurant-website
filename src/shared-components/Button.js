const Button = (props) => {
    const primary = props.primary ? "ctaBtnPrimary" :  ""
    const secondary = props.secondary ? "ctaBtnSecondary" :  ""
    return(
        <button className={`call__to__action--btn ${primary} ${secondary}`}>{props.title}</button>
    )
}
export default Button