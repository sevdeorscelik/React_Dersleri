import { Formik, useFormik } from 'formik';
import validations from './Validations'

const Signup = () => {

    const { handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: validations
    })

    return (
        <div className="Signup">
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit}>

                {/*input ********************************************************/}

                <label htmlFor="email">Email</label>
                <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    value={values.email}
                    onBlur={handleBlur}
                />
                { errors.email && touched.email && (
                <div>{errors.email}</div>
                )}


                <label htmlFor="password">Password</label>
                <input
                    onChange={handleChange}
                    id="password"
                    name="password"
                    placeholder="*****"
                    type="password"
                    value={values.password}
                    autoComplete="off"
                    onBlur={handleBlur}
                />
                { errors.password && touched.password && (<div>{errors.password}</div>)}

                <label htmlFor="password">Confirm Password</label>
                <input
                    onChange={handleChange}
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="*****"
                    type="password"
                    value={values.confirmPassword}
                    autoComplete="off"
                    onBlur={handleBlur}
                />
                { errors.confirmPassword && touched.confirmPassword && (<div>{errors.confirmPassword}</div>)}

                <button type="submit">Submit</button>

                <code> {JSON.stringify(values)} </code>
            </form>

        </div>
    )
}

export default Signup