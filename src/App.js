import{BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import HomePage from './HomePage';
import Navigation from './Navigation';
import MenProduct from './MenProduct';
import WomenProduct from './WomenProduct';
import './App.css';
function App() {
return(
   <Router>
    <Navigation/>
    <Routes>
    <Route exact path='/' Component={HomePage}/>
    <Route exact path='/MenProduct' Component={MenProduct}/>
    <Route exact path='/WomenProduct' Component={WomenProduct}/>


    </Routes>
    
   </Router>
)
};

export default App;
