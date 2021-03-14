const Button = (props) => {
    const primary = props.primary ? "ctaBtnPrimary" : ""
    const secondary = props.secondary ? "ctaBtnSecondary" : ""
    const familyMatch = props.familyMatch ? "familyMatch" : ""
    const specialMatch = props.specialMatch ? "specialMatch" : ""
    const socialMatch = props.socialMatch ? "socialMatch" : ""
    const handleClick = (evt) => {
        //console.log(evt.target)
        if (evt.target.classList.contains("ctaBtnSecondary")) {
            const selectClass = evt.target.classList[evt.target.classList.length - 1]
           // console.log(selectClass)
            const target__div = Array.from(document.querySelectorAll(".cta__msg"))
            const target__img__list = Array.from(document.querySelectorAll(".cta__events__img__list"))
           // console.log(target__img__list)

            target__div.forEach(element => {
                if (element.classList.contains(selectClass)) {
                  //  console.log(element)
                    element.classList.remove("ctaHide")
                } else {
                    element.classList.add("ctaHide")
                }
            })

            target__img__list.forEach(element => {
                if (element.classList.contains(selectClass)) {
                   // console.log(element)
                    element.classList.remove("ctaHide")
                } else {
                    element.classList.add("ctaHide")
                }
            })
            // console.log(evt.target.innerText)
        } else {
            return
        }
    }
    return (
        <button className={`call__to__action--btn ${primary} ${secondary} ${familyMatch} ${specialMatch} ${socialMatch}`}
            onClick={handleClick}>{props.title}</button>
    )
}
export default Button