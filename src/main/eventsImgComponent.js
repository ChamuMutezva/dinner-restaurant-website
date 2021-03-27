const EventsImgComponent = (props) => {
    return (
        <picture className="cta__img">
            <source media="(max-width: 680px)" srcSet={props.srcSet1} />
            <source media="(max-width: 1080px)" srcSet={props.srcSet2} />
            <source media="(min-width: 1081px)" srcSet={props.srcSet3} />
            <img src={props.src} srcSet={props.srcSet1} alt={props.alt} />
        </picture>
    )
}
export default EventsImgComponent