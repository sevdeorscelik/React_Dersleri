import { Formik } from 'formik';
import validations from './validation'


const Signup = () => {


    return (
        <div className="Signup">
            <h1>Sign Up</h1>

            <Formik
                initialValues={{
                    email: '',
                    password: "",
                    passwordConfirm: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >

                {
                    ({ handleSubmit, handleChange, values }) => {
                        return (
                            <form onSubmit={handleSubmit}>

                                <label >Email : </label>
                                <input
                                    onChange={handleChange}
                                    name="email"
                                    value={values.email}
                                    type="email"
                                />
                                <br /><br />

                                <label>Password : </label>
                                <input
                                    onChange={handleChange}
                                    name="password"
                                    value={values.password}
                                    type="password"
                                />
                                <br /><br />

                                <label>Confirm Password : </label>
                                <input
                                    onChange={handleChange}
                                    name="passwordConfirm"
                                    value={values.passwordConfirm}
                                />
                                <br /><br />


                                <button type="submit">Submit</button>

                                <br /><br />

                                <code> {JSON.stringify(values)} </code>


                            </form>
                        )
                    }
                }

            </Formik>

        </div>
    )
}

export default Signup