import { useFormik } from 'formik';
import { ValidationSchema } from './ValidationSchema'
import { useNavigate, Link } from 'react-router-dom';
import {Assessment} from '../../assets/Cards'

export default function Login() {
  const navigate = useNavigate();
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

  const handleClick = () => {
    navigate(`/`)
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={Assessment} alt='Login-img' className='img-fluid login-img' />
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
              <button type="submit" className='p-1 w-25' onClick={handleClick}>
                Log in
              </button>
            </div>
            <p className='mt-3'>New customer ? <Link to='/register'>Register here </Link>to start online test.</p>
          </form>
        </div>
      </div>
    </div>
  );
}
