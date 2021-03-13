import gatheringMobile from '../assets/images/homepage/family-gathering-mobile.jpg'
import gatheringMobile2x from '../assets/images/homepage/family-gathering-mobile@2x.jpg'
import gatheringTablet from '../assets/images/homepage/family-gathering-tablet.jpg'
import gatheringTablet2x from '../assets/images/homepage/family-gathering-tablet@2x.jpg'
import gatheringDesktop from '../assets/images/homepage/family-gathering-desktop.jpg'
import gatheringDesktop2x from '../assets/images/homepage/family-gathering-desktop@2x.jpg'

const Gatherings = () => {
    return (
        <section className="cta">
            <picture className="cta__img">
                <source media="(max-width: 680px)" srcSet={`${gatheringMobile}, ${gatheringMobile2x}`} />
                <source media="(max-width: 1080px)" srcSet={`${gatheringTablet}, ${gatheringTablet2x}`} />
                <source media="(min-width: 1081px)" srcSet={`${gatheringDesktop}, ${gatheringDesktop2x}`} />
                <img src={gatheringMobile} srcSet={`${gatheringMobile}, ${gatheringTablet}, ${gatheringDesktop}`} alt="the family gathering" />
            </picture>
            <div className="cta__descr">
                <nav>
                    <ul>
                        <li><button className="link__to__page">Family Gathering</button></li>
                        <li><button className="link__to__page">Special Events</button></li>
                        <li><button className="link__to__page">Social Events</button></li>
                    </ul>
                </nav>

            </div>

        </section>
    )
}
export default Gatherings