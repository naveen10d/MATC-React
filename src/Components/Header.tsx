import React from 'react'
import { BsFillHouseDoorFill, BsPersonCircle } from "react-icons/bs";
import './Header.css';

export default function Header() {

    function handler() {
        console.log('check---->>>>')
    }
    return (
        <div className='header'>
            <div>
                <BsFillHouseDoorFill onClick={() => { handler() }} />
                <BsPersonCircle />
            </div>
        </div>
    )
}



