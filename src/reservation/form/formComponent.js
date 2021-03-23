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
                <h3 className="date__selection__title">Pick a date</h3>
                <div className="date__selection__list">

                    <fieldset>
                        <legend>mm</legend>
                        <label className="sr__date__labels" htmlFor="month">Select a month</label>
                        <select name="month__zone" id="month">
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                            <option value="5">05</option>
                            <option value="6">06</option>
                            <option value="7">07</option>
                            <option value="8">08</option>
                            <option value="9">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                        </select>
                    </fieldset>


                    <fieldset>
                        <legend>dd</legend>
                        <label className="sr__date__labels" htmlFor="day">Select a date</label>
                        <select name="day__zone" id="date">
                            <option value="01">01</option>
                            <option value="02">02</option>
                            <option value="03">03</option>
                            <option value="04">04</option>
                            <option value="05">05</option>
                            <option value="06">06</option>
                            <option value="07">07</option>
                            <option value="08">08</option>
                            <option value="09">09</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                            <option value="31">31</option>
                        </select>
                    </fieldset>

                    <fieldset>
                        <legend>yyyy</legend>
                        <label className="sr__date__labels" htmlFor="year">Select a year</label>
                        <select name="year__zone" id="year">
                            <option value="1">2021</option>
                            <option value="2">2022</option>
                            <option value="3">2023</option>
                        </select>
                    </fieldset>
                </div>
            </div>
            <div className="time__selection">
                <h3 className="time__selection__title">Pick a time</h3>
                <div className="time__selection__list">
                    <div className="hours__mode">
                        <label className="sr__date__labels" htmlFor="hour">Select starting hour time</label>
                        <select className="hours" id="hour">
                            <option value="03">03</option>
                            <option value="06">06</option>
                            <option value="09">09</option>
                            <option value="12">12</option>
                        </select>
                    </div>

                    <div className="hours__mode">
                        <label className="sr__date__labels" htmlFor="minutes">Select starting minutes</label>
                        <select className="minutes" id="minutes">
                            <option value="00">00</option>
                            <option value="15">15</option>
                            <option value="30">30</option>
                            <option value="45">45</option>
                        </select>
                    </div>

                    <div className="hours__mode">
                        <label className="sr__date__labels" htmlFor="mode">Select either morning or afternoon</label>
                        <select className="mode" id="mode">
                            <option value="am">am</option>
                            <option value="pm">pm</option>
                        </select>
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