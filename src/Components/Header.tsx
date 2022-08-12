import { Link, BrowserRouter as Router } from "react-router-dom"
import { BsFillHouseDoorFill, BsPersonCircle } from "react-icons/bs";

export default function Header() {

    return (
        <div>
            <div className='d-flex justify-content-between fs-2 p-3 bg-danger'>
                <Router>
                    <Link to='/'> <BsFillHouseDoorFill /></Link>
                    <Link to='/login'><BsPersonCircle /></Link>
                </Router>
            </div>
        </div>
    )
}



