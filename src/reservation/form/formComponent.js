import { useForm } from 'react-hook-form'
import { useState } from 'react'
import Button from '../../shared-components/Button'

const FormComponent = () => {
    const [count, setCount] = useState(4)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data)
        console.log(errors)
    };
    console.log(watch("firstname"));

    const countup = () => {
        if (count >= 10) {
            return setCount(10)
        } else {
            setCount(count + 1)
        }

    }
    const countdown = () => {
        if (count <= 1) {
            return setCount(1)
        } else {
            setCount(count - 1)
        }
    }

    const validateMonth = () => {
        const currentMonth = new Date().getMonth()
        console.log(currentMonth)
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="details">

                <input className="form__inputs" type="name" name="firstname" aria-required="true"
                    id="firstname" ref={register({ required: true })} />
                <label className="input__label name__label" htmlFor="firstname">  Name   </label>
                {errors.firstname && <span className="errorMsg"> This field is required</span>}

            </div>

            <div className="details">

                <input className="form__inputs" type="email" name="email" aria-required="true"
                    id="email" ref={register({ required: true })} />
                <label className="input__label" htmlFor="email">Email</label>
                {errors.email && <span className="errorMsg">This field is required</span>}

            </div>

            <div className="date__selection">
                <fieldset className="date__picker">

                    <legend>Pick a date</legend>

                    <div className="date__container">

                        <div className="month__selector">

                            <label className="sr__date__labels" htmlFor="month">Select a month</label>
                            <input type="number" name="month__zone"
                                id="month" min="1" max="12" placeholder="MM"
                                ref={register({ required: true, validate: validateMonth })} />
                            
                            {errors.month__zone && <span className="errorMsg errorMsgDate">This field is required</span>}
                        </div>


                        <div className="date__selector">

                            <label className="sr__date__labels" htmlFor="date">Select a date</label>
                            <input type="number" name="day__zone" placeholder="DD" min="1" max="31"
                                id="date" ref={register({ required: true })} />
                                {errors.day__zone && <span className="errorMsg errorMsgDate">This field is required</span>}

                        </div>

                        <div className="year__selector">
                            <label className="sr__date__labels" htmlFor="year">Select a year</label>
                            <input type="number" name="year__zone" id="year"
                                min="2021" max="2025" placeholder="YYYY"
                                ref={register({ required: true })} />
                                {errors.year__zone && <span className="errorMsg errorMsgDate">This field is required</span>}

                        </div>
                    </div>
                </fieldset>

                <div className="time__selection">
                    <h3 className="time__selection__title">Pick a time</h3>
                    <div className="time__selection__list">
                        <div className="hours__mode">
                            <label className="sr__date__labels" htmlFor="hour">Select starting hour time</label>
                            <select className="hours" id="hour" name="getHours" ref={register({ required: true })}>
                                <option value="03">03</option>
                                <option value="06">06</option>
                                <option value="09">09</option>
                                <option value="12">12</option>
                            </select>
                        </div>

                        <div className="hours__mode">
                            <label className="sr__date__labels" htmlFor="minutes">Select starting minutes</label>
                            <select className="minutes" id="minutes" name="getMinutes" ref={register({ required: true })}>
                                <option value="00">00</option>
                                <option value="15">15</option>
                                <option value="30">30</option>
                                <option value="45">45</option>
                            </select>
                        </div>

                        <div className="state__mode">
                            <label className="sr__date__labels" htmlFor="mode">Select either morning or afternoon</label>
                            <select className="mode" id="mode" name="stateMode" ref={register({ required: true })}>
                                <option value="am">am</option>
                                <option value="pm">pm</option>
                            </select>
                        </div>
                    </div>
                </div>


            </div>



            <div className="reserve__counter">
                <button type="button" className="count__down" onClick={countdown}>-</button>
                <p className="counter__holder"><span className="counter">{count}</span> people</p>
                <button type="button" className="count__up" onClick={countup}>+</button>
            </div>
            {/*<input type="submit" />*/}
            <Button title="Reservation" primary={true} longBtn={true} />
        </form>
    )
}
export default FormComponent