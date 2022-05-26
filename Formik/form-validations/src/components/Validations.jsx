import * as Yup from 'yup'

//yup github hesabindan hazir shema aldik ( https://github.com/jquense/yup )

const validations = Yup.object().shape({

    email: Yup.string().email('*Bitte geben Sie eine gültige Email Adresse ein.').required('*Bitte geben Sie Ihre Email Adresse'),
    password: Yup.string().min(5,'*Passwort muss mindestens 5 Zeichen lang sein').required('*Bitte geben Sie Ihre Password'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')],'*Passwörter sind nicht gleich').required('*Bitte geben Sie Ihre Password')

});

export default validations
