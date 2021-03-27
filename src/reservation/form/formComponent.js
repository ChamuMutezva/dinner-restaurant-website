import { useForm } from "react-hook-form";
import { useState } from "react";
import Button from "../../shared-components/Button";

const FormComponent = () => {
  const [count, setCount] = useState(4)
  const { register, handleSubmit, watch, errors } = useForm()

  const people__msg = count > 1 ? "people" : "person"
 
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
  };
  console.log(watch("firstname"));

  const countup = () => {
    if (count >= 10) {
      return setCount(10);
    } else {
      setCount(count + 1);
    }
  };
  const countdown = () => {
    if (count <= 1) {
      return setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const validateEmail = (value) => {
    if (value !== "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/") {
      console.log("email is not valid")
    }
  }

  const validateMonth = () => {
    const currentMonth = new Date().getMonth();
    console.log(currentMonth);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="details">
        <input
          className="form__inputs"
          type="name"
          name="firstname"
          aria-required="true"
          id="firstname"
          ref={register({ required: true })}
        />
        <label className="input__label name__label" htmlFor="firstname">         
          Name
        </label>
        {errors.firstname && (
          <span className="errorMsg"> Name is required</span>
        )}
      </div>

      <div className="details">
        <input
          className="form__inputs"
          type="email"
          name="email"
          aria-required="true"
          id="email"
          ref={register({ required: true , validate: validateEmail})}
        />
        <label className="input__label" htmlFor="email">
          Email
        </label>
        {errors.email && (
          <span className="errorMsg">Email is required</span>
        )}
       {/* {errors.email && errors.email.type !== "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
        (<span className="errorMsg">email format is not valid</span>)}  */}
      </div>

      <div className="date__container">


        <div className="date__list__items">
          <div className="date__selection__header">

            <h3 className="date__selection__title">Pick a date</h3>
            {(errors.month__zone || errors.day__zone || errors.year__zone) && (
              <span className="errorMsg errorMsgDate">
                This field is incomplete
              </span>
            )}

          </div>
          <div className="date__selection">
            <div className="month__selector">
              <label className="sr__date__labels" htmlFor="month">
                Select a month
            </label>
              <input
                type="number"
                name="month__zone"
                id="month"
                min="1"
                max="12"
                placeholder="MM"
                className="full__date"
                ref={register({ required: true, validate: validateMonth })}
              />
            </div>

            <div className="date__selector">
              <label className="sr__date__labels" htmlFor="date">
                Select a date
            </label>
              <input
                type="number"
                name="day__zone"
                className="full__date"
                placeholder="DD"
                min="1"
                max="31"
                id="date"
                ref={register({ required: true })}
              />
              {/*{errors.day__zone && <span className="errorMsg errorMsgDate">This field is required</span>} */}
            </div>

            <div className="year__selector">
              <label className="sr__date__labels" htmlFor="year">
                Select a year
            </label>
              <input
                type="number"
                name="year__zone"
                id="year"
                min="2021"
                max="2025"
                placeholder="YYYY"
                className="full__date"
                ref={register({ required: true })}
              />
              {/* {errors.year__zone && <span className="errorMsg errorMsgDate">This field is required</span>} */}
            </div>
          </div>
        </div>
        <div className="time__selection">
          <div className="time__selection__header">
            <h3 className="time__selection__title">Pick a time</h3>
            {(errors.get__hours || errors.get__minutes) && (
              <span className="errorMsg errorMsgDate">
                This field is incomplete
              </span>
            )}
          </div>
          <div className="time__selection__list">
            <div className="hours__mode">
              <label className="sr__date__labels" htmlFor="hour">
                Select starting hour time
              </label>
              <input type="number"
                className="hours full__time"
                id="hour"
                name="get__hours"
                min="06" max="11"                
                placeholder="00"
                ref={register({ required: true , minLength: 2})}
              />

            </div>

            <div className="hours__mode">
              <label className="sr__date__labels" htmlFor="minutes">
                Select starting minutes
              </label>
              <input type="number"
                className="minutes full__time"
                id="minutes"
                name="get__minutes"
                min="00"
                max="59"
                placeholder="00"
                ref={register({ required: true })}
              />

            </div>

            <div className="state__mode">
              <label className="sr__date__labels" htmlFor="mode">
                Select either morning or afternoon
              </label>
              <select
                className="mode"
                id="mode"
                name="stateMode"
                ref={register({ required: true })}
              >
                <option value="am">am</option>
                <option value="pm">pm</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="reserve__counter">
        <button type="button" className="count__down" onClick={countdown} 
        aria-label="reduce the number of people">
          -
        </button>
        <p className="counter__holder">
          <span className="counter">{count}</span> {people__msg}
        </p>
        <button type="button" className="count__up" onClick={countup} 
        aria-label="increase the number of people"> 
          +
        </button>
      </div>
      {/*<input type="submit" />*/}
      <Button title="Reservation" primary={true} longBtn={true} />
    </form>
  );
};
export default FormComponent;
