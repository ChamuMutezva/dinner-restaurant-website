//family gathering images
import gatheringMobile from '../assets/images/homepage/family-gathering-mobile.jpg'
import gatheringMobile2x from '../assets/images/homepage/family-gathering-mobile@2x.jpg'
import gatheringTablet from '../assets/images/homepage/family-gathering-tablet.jpg'
import gatheringTablet2x from '../assets/images/homepage/family-gathering-tablet@2x.jpg'
import gatheringDesktop from '../assets/images/homepage/family-gathering-desktop.jpg'
import gatheringDesktop2x from '../assets/images/homepage/family-gathering-desktop@2x.jpg'

//special events images
import specialMobile from '../assets/images/homepage/special-events-mobile.jpg'
import specialMobile2x from '../assets/images/homepage/special-events-mobile@2x.jpg'
import specialTablet from '../assets/images/homepage/special-events-tablet.jpg'
import specialTablet2x from '../assets/images/homepage/special-events-tablet@2x.jpg'
import specialDesktop from '../assets/images/homepage/special-events-desktop.jpg'
import specialDesktop2x from '../assets/images/homepage/special-events-desktop@2x.jpg'

//social events images
import socialMobile from '../assets/images/homepage/social-events-mobile.jpg'
import socialMobile2x from '../assets/images/homepage/social-events-mobile@2x.jpg'
import socialTablet from '../assets/images/homepage/social-events-tablet.jpg'
import socialTablet2x from '../assets/images/homepage/social-events-tablet@2x.jpg'
import socialDesktop from '../assets/images/homepage/social-events-desktop.jpg'
import socialDesktop2x from '../assets/images/homepage/social-events-desktop@2x.jpg'

import Button from '../shared-components/Button'
import Events from '../shared-components/Events'
import EventsImgComponent from './eventsImgComponent'
import LinkBtn from '../shared-components/LinkBtn'

const CallToAction = () => {
    return (
        <section className="cta">
            <div className="cta__events__img">
                <div className="cta__events__img__list familyMatch">
                    <EventsImgComponent srcSet1={`${gatheringMobile}, ${gatheringMobile2x}`}
                        srcSet2={`${gatheringTablet}, ${gatheringTablet2x}`}
                        srcSet3={`${gatheringDesktop}, ${gatheringDesktop2x}`} src={gatheringMobile}
                        srcSet={`${gatheringMobile}, ${gatheringTablet}, ${gatheringDesktop}`}
                        alt="the family gathering"
                    />
                </div>
                <div className="cta__events__img__list specialMatch ctaHide">
                    <EventsImgComponent srcSet1={`${specialMobile}, ${specialMobile2x}`}
                        srcSet2={`${specialTablet}, ${specialTablet2x}`}
                        srcSet3={`${specialDesktop}, ${specialDesktop2x}`} src={specialMobile}
                        srcSet={`${specialMobile}, ${specialTablet}, ${specialDesktop}`}
                        alt="the special events"
                    />
                </div>
                <div className="cta__events__img__list socialMatch ctaHide">
                    <EventsImgComponent srcSet1={`${socialMobile}, ${socialMobile2x}`}
                        srcSet2={`${socialTablet}, ${socialTablet2x}`}
                        srcSet3={`${socialDesktop}, ${socialDesktop2x}`} src={socialMobile}
                        srcSet={`${socialMobile}, ${socialTablet}, ${socialDesktop}`}
                        alt="the social events"
                    />
                </div>

            </div>
            <div className="cta__descr">
                <nav>
                    <ul className="cta__descr__list__items" >
                        <li><Button title="Family Gathering" secondary={true} familyMatch={true} /></li>
                        <li><Button title="Special Events" secondary={true} specialMatch={true} /></li>
                        <li><Button title="Social Events" secondary={true} socialMatch={true} /></li>
                    </ul>
                </nav>
                <div className="cta__descr__hero">
                    <div className="family cta__msg familyMatch">
                        <Events eventTitle="Family Gathering"
                            eventDescr="We love catering for entire families.
                                         So please bring everyone along for a special meal with your
                                        loved ones. We’ll provide a memorable experience for all." />
                    </div>

                    <div className="special cta__msg specialMatch ctaHide">
                        <Events eventTitle="Special Events"
                            eventDescr="Whether it’s a romantic dinner or special date you’re
                                    celebrating with others we’ll look after you. 
                                    We’ll be sure to mark your special date with an unforgettable meal." />

                    </div>

                    <div className="social cta__msg socialMatch ctaHide">
                        <Events eventTitle="Social Events"
                            eventDescr="Are you looking to have a larger social event? No problem!
                                        We’re more than happy to cater for big 
                                        parties. We’ll work with you to make your event a hit with everyone." />

                    </div>

                    <LinkBtn btn_title="Book a table" primary={true} />

                </div>
            </div>

        </section>
    )
}
export default CallToAction