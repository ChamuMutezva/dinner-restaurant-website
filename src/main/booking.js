//import Button from '../shared-components/Button'
import LinkBtn from '../shared-components/LinkBtn'

const Booking = () => {
    return (
        <section className="booking">
            <h3 className="booking__title">Ready to make a reservation?</h3>
            {/*<Button title="Book a table" centerBtn={true}/>*/}
            <LinkBtn btn_title="Book a table" centerBtn={true}/>
        </section>
    )
}
export default Booking
