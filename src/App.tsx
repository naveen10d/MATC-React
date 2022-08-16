import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Routers from './Components/Routers';
import './Scss/config.scss';
import './Scss/typo.scss'

function App() {
  return (
    <div>
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
