import { useNavigate } from 'react-router-dom';
import { instructions } from '../../../assets/Instructions'

export default function ReactPage() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/reactQuestion`)
    }
    return (
        <div className='container'>
            <div className='row header'>
                <div className='col-12 '>
                    <div className='d-flex flex-column justify-content-center align-items-center shadow text-muted m-4'>
                        <div className='d-flex justify-content-center align-items-center fs-1 m-4 text-dark'> Instructions </div>
                        <div className='d-flex justify-content-start align-items-start mb-4'>
                            <ul>
                                {instructions.map(instruction => <li>{instruction}</li>
                                )}
                            </ul>
                        </div>
                        <button className='px-3 m-5' onClick={handleClick}>Start</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

