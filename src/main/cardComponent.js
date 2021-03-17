const CardComponent = (props) => {
    let className = props.imageStyle ? "imageStyle" :  ""
    let menuTitle = props.menuTitle ? "menuTitle" : ""
    let shadow = props.cardShadow ? "cardShadow" : ""
    let hideBefore = props.hideBefore ? "hideBefore" : ""
    let menuDescr = props.menuDescr ? "menuDescr" : ""
    let cardMenu = props.cardMenu ? "cardMenu" : ""
    let bottomBorder = props.bottomBorder ? "bottomBorder" : ""
    return (
        <div className={`card ${className} ${cardMenu} ${bottomBorder}`}>
            <picture className={`card__img ${shadow}`}>
                <source media="(max-width: 680px)" srcSet={props.srcSet1} />
                <source media="(max-width: 1080px)" srcSet={props.srcSet2} />
                <source media="(min-width: 1081px)" srcSet={props.srcSet3} />
                <img src={props.src} srcSet={props.srcSet}
                    alt={props.alt} />
            </picture>
            <div className={`card__main  ${hideBefore}`}>
                <h2 className={`card__main__title ${menuTitle}`}>{props.title}</h2>
                <p className={`card__main__descr ${menuDescr}`}>{props.description} </p>
            </div>
        </div>
    )
}
export default CardComponent
