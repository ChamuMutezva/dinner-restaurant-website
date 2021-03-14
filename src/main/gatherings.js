import gatheringMobile from '../assets/images/homepage/family-gathering-mobile.jpg'
import gatheringMobile2x from '../assets/images/homepage/family-gathering-mobile@2x.jpg'
import gatheringTablet from '../assets/images/homepage/family-gathering-tablet.jpg'
import gatheringTablet2x from '../assets/images/homepage/family-gathering-tablet@2x.jpg'
import gatheringDesktop from '../assets/images/homepage/family-gathering-desktop.jpg'
import gatheringDesktop2x from '../assets/images/homepage/family-gathering-desktop@2x.jpg'
import Button from '../shared-components/Button'
import Events from '../shared-components/Events'

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
                        <li><Button title="Family Gathering" secondary={true} /></li>
                        <li><Button title="Special Events" secondary={true} /></li>
                        <li><Button title="Social Events" secondary={true} /></li>
                    </ul>
                </nav>
                <div className="cta__descr__hero">
                    <div className="family">
                        <Events eventTitle="Family Gathering"
                            eventDescr="We love catering for entire families.
                                         So please bring everyone along for a special meal with your
                                        loved ones. We’ll provide a memorable experience for all." />
                    </div>

                    <div className="special">
                        <Events eventTitle="Special Events"
                            eventDescr="Whether it’s a romantic dinner or special date you’re
                                    celebrating with others we’ll look after you. 
                                    We’ll be sure to mark your special date with an unforgettable meal." />

                    </div>

                    <div className="social">
                        <Events eventTitle="Social Events"
                            eventDescr="Are you looking to have a larger social event? No problem!
                                        We’re more than happy to cater for big 
                                        parties. We’ll work with you to make your event a hit with everyone." />

                    </div>

                    <Button title="Book a table" primary={true} />

                    {/*<button className="cta__descr__hero--btn">Book a table</button> */}
                </div>
            </div>

        </section>
    )
}
export default Gatherings