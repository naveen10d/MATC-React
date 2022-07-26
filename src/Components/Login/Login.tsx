import axios from 'axios'
import { useFormik } from 'formik';
import { ValidationSchema } from './ValidationSchema'
import { useNavigate, Link } from 'react-router-dom';
// import { Assessment } from '../../assets/Cards'

export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: values => {
      let inputs = {
        email: values.email,
        password: values.password,
      }
      axios.post('http://localhost:4000/register', inputs).then((response) => {
        console.log(response)
        navigate(`/home`)
      })
        .catch((error) => {
          console.log('error', error)
        })
    },
  });
  return (
    <div className="container">
      <div className="row header">
        <div className="col-6">
          {/* <img src={Assessment} alt='Login-img' className='img-fluid login-img' /> */}
        </div>
        <div className='col-6'>
          <div className='d-flex flex-column justify-content-center align-items-center shadow text-muted m-4'>
            <div className='d-flex justify-content-center align-items-center fs-1 m-3 text-dark'> Login Here!!!</div>
            <form onSubmit={formik.handleSubmit} className='d-flex flex-column justify-content-center align-items-center'>
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
              <div className='mt-4 p-3 w-100  d-flex justify-content-center align-items-center'>
                <button type="submit" className='p-1 w-25'>
                  Log in
                </button>
              </div>
              <p className='mt-3'>New customer ? <Link to='/register'>Register here </Link>to start online test.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
