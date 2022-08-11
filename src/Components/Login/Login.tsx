import { useFormik } from 'formik';
import LoginImg from "../../assets/login-img.jpeg"
import { ValidationSchema } from './ValidationSchema'

export default function Login() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: ValidationSchema,
    onSubmit: values => { },
  });
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={LoginImg} alt='Login-img' className='img-fluid login-img' />
        </div>
        <div className='col-6 d-flex flex-column justify-content-center align-items-center shadow text-muted'>
          <div className='d-flex justify-content-center align-items-center fs-1 mb-5 text-dark'> Login Here!!!</div>
          <form onSubmit={formik.handleSubmit} className='d-flex flex-column justify-content-center align-items-center'>
            <div>
              <input
                type="email"
                name="email"
                placeholder='Email'
                className='p-2 mt-4' />
              {formik.touched.email && formik.errors.email ? (
                <div className='d-flex justify-content-center align-items-center text-danger'>
                  {formik.errors.email}</div>) : null}
            </div>
            <div>
              <input type="text"
                name="password"
                placeholder='Password'
                className='p-2 mt-4' />
              {formik.touched.password && formik.errors.password ? (
                <div className='d-flex justify-content-center align-items-center text-danger'>
                  {formik.errors.password}</div>) : null}
            </div>
            <div className='mt-4 p-3 w-100  d-flex justify-content-center align-items-center'>
              <button type="submit" className='p-1 w-25'>
                Log in
              </button>
            </div>
            <p className='mt-3'>New customer ? <a href="https://www.w3schools.com">Register here </a>to start online test.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
