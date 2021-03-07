import enjoyableMobile from '../assets/images/homepage/enjoyable-place-mobile.jpg'
import enjoyableMobile2x from '../assets/images/homepage/enjoyable-place-mobile@2x.jpg'
import enjoyableTablet from '../assets/images/homepage/enjoyable-place-tablet.jpg'
import enjoyableTablet2x from '../assets/images/homepage/enjoyable-place-tablet@2x.jpg'
import enjoyableDesktop from '../assets/images/homepage/enjoyable-place-desktop.jpg'
import enjoyableDesktop2x from '../assets/images/homepage/enjoyable-place-desktop@2x.jpg'
const Cards = () => {
    return (
        <section>
            <div className="card">
                <picture>
                    <source media="(max-width: 680px)" srcSet={`${enjoyableMobile}, ${enjoyableMobile2x}`} />
                    <source media="(max-width: 1080px)" srcSet={`${enjoyableTablet}, ${enjoyableTablet2x}`} />
                    <source media="(min-width: 1081px)" srcSet={`${enjoyableDesktop}, ${enjoyableDesktop2x}`} />
                    <img src={enjoyableMobile} srcSet={`${enjoyableMobile}, ${enjoyableTablet}, ${enjoyableDesktop}`}
                        alt="Enjoy the beautiful surroundings" />
                </picture>
                <div className="card__main">
                    <h2 className="card__main__title">Enjoyable place for all the family</h2>
                    <p className="card__main__descr">
                        Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange
                        a tour of the farm before your meal.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Cards