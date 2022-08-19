import { useFormik } from 'formik';
import { ValidationSchema } from './ValidationSchema'
import { Assessment } from '../../assets/Cards'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'


export default function Register() {
  const navigate = useNavigate()
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
      let inputs = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: values.phoneNumber,
        password: values.password,
        confirmPassword: values.confirmPassword
      }
      axios.post('http://localhost:4000/register', inputs)
        .then((response) => {
          if (response.status === 201) {
            navigate(`/login`)
          }
        })
        .catch((err) => {
          console.log("Email already exsits", err)
        })
    },

  });
  return (
    <div
      className="container"
    >
      <div className="row header">
        <div className="col-4">
          {/* <img src={Assessment} alt='Login-img' className='img-fluid login-img' /> */}
        </div>
        <div className='col-8'>
          <div className='d-flex flex-column justify-content-center align-items-center shadow shadow-grey text-muted m-5'>
            <div className='d-flex justify-content-center align-items-center fs-1 m-3 text-dark'> Register Here!!! </div>
            <form onSubmit={formik.handleSubmit} className='d-flex flex-column justify-content-center align-items-center '>
              <div className='d-flex gap-4'>
                <div >
                  <input
                    type="text"
                    name="firstName"
                    placeholder='FirstName'
                    className='p-2 mt-4'
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div className='d-flex justify-content-center align-items-center text-danger'>
                      {formik.errors.firstName}</div>) : null}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder='LastName'
                    className='p-2 mt-4'
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
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
                    className='p-2 mt-4'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className='d-flex justify-content-center align-items-center text-danger'>
                      {formik.errors.email}</div>) : null}
                </div>
                <div>
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder='PhoneNumber'
                    className='p-2 mt-4'
                    onChange={formik.handleChange}
                    value={formik.values.phoneNumber}
                  />
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
                    className='p-2 mt-4'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className='d-flex justify-content-center align-items-center text-danger'>
                      {formik.errors.password}</div>) : null}
                </div>
                <div>
                  <input
                    type="text"
                    name="confirmPassword"
                    placeholder='Confirm Password'
                    className='p-2 mt-4'
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className='d-flex justify-content-center align-items-center text-danger'>
                      {formik.errors.confirmPassword}</div>) : null}
                </div>
              </div>
              <button type="submit" className='mt-4 p-2 w-25'>
                Submit
              </button>
              <p className='mt-4'> Have already registered ? Then <Link to='/login'> Login </Link> to start online test.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

