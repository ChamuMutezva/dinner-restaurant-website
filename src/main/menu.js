import CardComponent from './cardComponent'
import beefMobile from '../assets/images/homepage/beef-mobile.jpg'
import beefMobile2x from '../assets/images/homepage/beef-mobile@2x.jpg'
import beefTabletDesktop from '../assets/images/homepage/beef-desktop-tablet.jpg'
import beefTabletDesktop2x from '../assets/images/homepage/beef-desktop-tablet@2x.jpg'

import salmonMobile from '../assets/images/homepage/salmon-mobile.jpg'
import salmonMobile2x from '../assets/images/homepage/salmon-mobile@2x.jpg'
import salmonTabletDesktop from '../assets/images/homepage/salmon-desktop-tablet.jpg'
import salmonTabletDesktop2x from '../assets/images/homepage/salmon-desktop-tablet@2x.jpg'

import chocolateMobile from '../assets/images/homepage/chocolate-mobile.jpg'
import chocolateMobile2x from '../assets/images/homepage/chocolate-mobile@2x.jpg'
import chocolateTabletDesktop from '../assets/images/homepage/chocolate-desktop-tablet.jpg'
import chocolateTabletDesktop2x from '../assets/images/homepage/chocolate-desktop-tablet@2x.jpg'

const Menu = () => {
    return (
        <section className="menu__section">
            <div className="menu__headings">
                <h2 className="menu__headings__title">
                    A few highlights from our menu
                </h2>
                <p className="menu__headings__descr">
                    We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites.
                    Our menu is revamped every season.
                </p>
            </div>
            <div className="menu__cards">
                <CardComponent srcSet1={salmonMobile}
                    srcSet2={salmonTabletDesktop}
                    srcSet3={salmonTabletDesktop2x}
                    src={salmonMobile}                    
                    alt="Enjoy the delicious salmon"
                    title="Seared Salmon Fillet"
                    description=" Our locally sourced salmon served with
                    a refreshing buckwheat summer salad."
                    menuTitle={true} cardShadow={true} hideBefore={true} menuDescr={true}
                    bottomBorder={true} cardMenu={true} />
                

                <CardComponent srcSet1={beefMobile}
                    srcSet2={beefTabletDesktop}
                    srcSet3={beefTabletDesktop2x}
                    src={beefMobile}
                    alt="Enjoy the delicious Rosemary Filet Mignon"
                    title="Rosemary Filet Mignon"
                    description="Our prime beef served to your taste with a
                     delicious choice of seasonal sides."
                    menuTitle={true} cardShadow={true} hideBefore={true} menuDescr={true}
                    bottomBorder={true} cardMenu={true} />

                

                <CardComponent srcSet1={chocolateMobile}
                    srcSet2={chocolateTabletDesktop}
                    srcSet3={chocolateTabletDesktop2x}
                    src={chocolateMobile}                    
                    alt="Enjoy the delicious Summer Fruit Chocolate Mousse"
                    title="Summer Fruit Chocolate Mousse"
                    description="Creamy mousse combined with summer fruits
                     and dark chocolate shavings."
                    menuTitle={true} cardShadow={true} hideBefore={true} menuDescr={true}
                     cardMenu={true} />

            </div>
        </section>
    )
}
export default Menu