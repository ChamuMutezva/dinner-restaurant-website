const Events = (props) => {
    return (
        <div className="cta__descr__hero__cat">
            <h2 className="cta__descr__hero__cat__title">{props.eventTitle}</h2>
            <p className="cta__descr__hero__cat__summary">{props.eventDescr}</p>
        </div>
    )
}
export default Events