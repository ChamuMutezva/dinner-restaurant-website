import enjoyableMobile from '../assets/images/homepage/enjoyable-place-mobile.jpg'
import enjoyableMobile2x from '../assets/images/homepage/enjoyable-place-mobile@2x.jpg'
import enjoyableTablet from '../assets/images/homepage/enjoyable-place-tablet.jpg'
import enjoyableTablet2x from '../assets/images/homepage/enjoyable-place-tablet@2x.jpg'
import enjoyableDesktop from '../assets/images/homepage/enjoyable-place-desktop.jpg'
import enjoyableDesktop2x from '../assets/images/homepage/enjoyable-place-desktop@2x.jpg'

// SECOND CARD ASSETS
import localSourceMobile from '../assets/images/homepage/locally-sourced-mobile.jpg'
import localSourceMobile2x from '../assets/images/homepage/locally-sourced-mobile@2x.jpg'
import localSourceTablet from '../assets/images/homepage/locally-sourced-tablet.jpg'
import localSourceTablet2x from '../assets/images/homepage/locally-sourced-tablet@2x.jpg'
import localSourceDesktop from '../assets/images/homepage/locally-sourced-desktop.jpg'
import localSourceDesktop2x from '../assets/images/homepage/locally-sourced-desktop@2x.jpg'

import CardComponent from './cardComponent'
const Cards = () => {
    return (
        <section className="cards__section">

            <CardComponent srcSet1={`${enjoyableMobile}, ${enjoyableMobile2x}`}
                srcSet2={`${enjoyableTablet}, ${enjoyableTablet2x}`}
                srcSet3={`${enjoyableDesktop}, ${enjoyableDesktop2x}`}
                src={enjoyableMobile}
                srcSet={`${enjoyableMobile}, ${enjoyableTablet}, ${enjoyableDesktop}`}
                alt="Enjoy the beautiful surroundings"
                title="Enjoyable place for all the family"
                description="Our relaxed surroundings make dining with us a great
                             experience for everyone. We can even arrange
                             a tour of the farm before your meal."/>

            {/*SECOND CARD*/}

            <CardComponent srcSet1={`${localSourceMobile}, ${localSourceMobile2x}`}
                srcSet2={`${localSourceTablet}, ${localSourceTablet2x}`}
                srcSet3={`${localSourceDesktop}, ${localSourceDesktop2x}`}
                src={localSourceMobile}
                srcSet={`${localSourceMobile}, ${localSourceTablet}, ${localSourceDesktop}`}
                alt="Enjoy the beautiful surroundings"
                title="The most locally sourced food"
                description="All our ingredients come directly from our farm or 
                           local fishery. So you can be sure that you’re 
                           eating the freshest, most sustainable food."
                imageStyle={true}/>

        </section>
    )
}
export default Cards


