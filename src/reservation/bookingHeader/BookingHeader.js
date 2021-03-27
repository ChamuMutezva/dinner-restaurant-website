import HeaderComponent from '../../shared-components/HeaderComponent'

const BookingHeader = () => {
    return (
        <header>
            <HeaderComponent title="Reservations" secondaryHeader={true}
                summary="We can’t wait to host you. If you have any special
                                        requirements please feel free to call on the phone number below.
                                         We’ll be happy to accommodate you." />
        </header>
    )
}
export default BookingHeader
