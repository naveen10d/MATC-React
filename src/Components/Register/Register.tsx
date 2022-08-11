import { useFormik } from 'formik';
import { ValidationSchema } from './ValidationSchema'
import LoginImg from "../../assets/login-img.jpeg"


export default function Register() {

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
    onSubmit: values => {
      console.log('check', values)
    },
  });
  return (
    <div
      className="container"
    >
      <div className="row">
        <div className="col-4">
          <img src={LoginImg} alt='Login-img' className='img-fluid login-img' />
        </div>
        <div className='col-8 d-flex flex-column justify-content-center align-items-center shadow text-muted'>
          <div className='d-flex justify-content-center align-items-center fs-1 mt-3 text-dark'> Register Here!!! </div>
          <form onSubmit={formik.handleSubmit} className='d-flex flex-column justify-content-center align-items-center '>
            <div className='d-flex gap-4'>
              <div >
                <input
                  type="text"
                  name="firstName"
                  placeholder='FirstName'
                  className='p-2 mt-4' />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className='d-flex justify-content-center align-items-center text-danger'>
                    {formik.errors.firstName}</div>) : null}
              </div>
              <div>
                <input
                  type="text"
                  name="lName"
                  placeholder='LastName'
                  className='p-2 mt-4' />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className='d-flex justify-content-center align-items-center text-danger'>
                    {formik.errors.lastName}</div>) : null}
              </div>
            </div>
            <div className='d-flex gap-4'>
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
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder='PhoneNumber'
                  className='p-2 mt-4' />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className='d-flex justify-content-center align-items-center text-danger'>
                    {formik.errors.phoneNumber}</div>) : null}
              </div>
            </div>
            <div className='d-flex gap-4'>
              <div>
                <input type="text"
                  name="password"
                  placeholder='Password'
                  className='p-2 mt-4' />
                {formik.touched.password && formik.errors.password ? (
                  <div className='d-flex justify-content-center align-items-center text-danger'>
                    {formik.errors.password}</div>) : null}
              </div>
              <div>
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder='Confirm Password'
                  className='p-2 mt-4' />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className='d-flex justify-content-center align-items-center text-danger'>
                    {formik.errors.confirmPassword}</div>) : null}
              </div>
            </div>
            <button type="submit" className='mt-4 p-2 w-25'>
              Submit
            </button>
            <p className='mt-4'> Have already registered ? Then <a href="https://www.w3schools.com"> Login </a> to start online test.</p>
          </form>
        </div>
      </div>
    </div>
  );
}

