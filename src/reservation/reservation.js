import BookingHeader from './bookingHeader/BookingHeader'
import FormComponent from './form/formComponent'
const Reservation = () => {
    return (
        <div className="reservation">
            <BookingHeader />
            <main className="main__component">
                <FormComponent />
            </main>
        </div>
    )
}
export default Reservation