import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const ValidationSchema =
    Yup.object({
        firstName: Yup.string().required('Required*'),
        lastName: Yup.string().required('Required*'),
        email: Yup.string().email('Invalid Email Address').required('Required*'),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required*'),
        password: Yup.string().max(15, 'Must be 15 charactersor less').required('Required*')
            .min(8, 'Should be minimum 8 chars .')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
