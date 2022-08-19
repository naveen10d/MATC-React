import * as Yup from 'yup';

export const ValidationSchema =
    Yup.object({
        email: Yup.string().email('Invalid Email Address').required('Required*'),
        password: Yup.string().max(15, 'Must be 15 charactersor less').required('Required*')
            .min(8, 'Should be minimum 8 chars.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    })

