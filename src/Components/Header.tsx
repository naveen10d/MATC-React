import React from 'react'
// import { useNavigate } from "react-router-dom"
import { BsFillHouseDoorFill, BsPersonCircle } from "react-icons/bs";
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
            <div className = 'check'>
                <BsFillHouseDoorFill onClick={() => { onHomePage() }} />
                <BsPersonCircle onClick={() => { onLoginPage() }} />
            </div>
        </div>
    )
}



