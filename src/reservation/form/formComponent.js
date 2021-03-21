import { useForm } from 'react-hook-form'
const FormComponent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <label className="input__label" htmlFor="firstname">
                <span className="sr__only">Name</span>
                <input className="form__inputs" type="name" name="firstname" id="firstname" ref={register({ required: true })} />
                {errors.firstname && <span>This field is required</span>}
            </label>

            <label className="input__label" htmlFor="email">
                <span className="sr__only">Email</span>
                <input className="form__inputs" type="email" name="email" id="email" ref={register({ required: true })} />
                {errors.email && <span>This field is required</span>}
            </label>

            <div className="date__selection">
                
                <fieldset>
                    <legend>MM</legend>
                    <select name="month__zone">                        
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Apr</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dec</option>
                    </select>
                </fieldset>

                <fieldset>
                    <legend>DD</legend>
                    <select name="day__zone">                       
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
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
                    <legend>YYYY</legend>
                    <select name="year__zone">
                        <option value="1">2021</option>
                        <option value="2">2022</option>
                        <option value="3">2023</option>
                    </select>
                </fieldset>
            </div>

            <input type="submit" />
        </form>
    )
}
export default FormComponent