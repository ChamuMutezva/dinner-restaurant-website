const CardComponent = (props) => {
    return (
        <div className="card">
            <picture className="card__img">
                <source media="(max-width: 680px)" srcSet={props.srcSet1} />
                <source media="(max-width: 1080px)" srcSet={props.srcSet2} />
                <source media="(min-width: 1081px)" srcSet={props.srcSet3} />
                <img src={props.src} srcSet={props.srcSet}
                    alt={props.alt} />
            </picture>
            <div className="card__main">
                <h2 className="card__main__title">{props.title}</h2>
                <p className="card__main__descr">{props.description} </p>
            </div>
        </div>
    )
}
export default CardComponent
