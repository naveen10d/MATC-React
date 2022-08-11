import React from 'react'
// import { useNavigate } from "react-router-dom"
import { BsFillHouseDoorFill, BsPersonCircle, BsCart } from "react-icons/bs";
import './Header.css';

export default function Header() {

    // const navigate = useNavigate();

    const onHomePage = () => {
        // navigate(`/home`)
    }
    const onLoginPage = () => {
        // navigate(`/login`)
    }

    return (
        <div className='header'>
            <div className='iconSpace'>
                <BsFillHouseDoorFill onClick={() => { onHomePage() }} />
                <div>
                    <BsPersonCircle onClick={() => { onLoginPage() }} />
                    <BsCart />
                </div>
            </div>
        </div>
    )
}



