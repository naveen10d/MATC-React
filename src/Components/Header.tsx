import { Link } from "react-router-dom"
import { BsFillHouseDoorFill, BsPersonCircle } from "react-icons/bs";

export default function Header() {

    return (
        <div>
            <div className='d-flex justify-content-between fs-2 p-3 bg-grey'>
                <Link to='/home'><BsFillHouseDoorFill className="text-dark" /></Link>
                <Link to='/login'><BsPersonCircle className="text-dark" /></Link>
            </div>
        </div>
    )
}



