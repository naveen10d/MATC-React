import { cards } from '../../assets/Cards'
import { Link } from 'react-router-dom'



export default function Home() {
    return (
        <div className='container'>
            < div className='row'>
                {cards.map((card) => (
                    <div className='col-6 d-flex justify-content-center align-items-center'>
                        <Link to={card.url}>
                            <img src={card.imageUrl} alt='Login-img' className='img-fluid' />
                        </Link>
                    </div>
                )
                )}
            </div>
        </div >
    )
}
