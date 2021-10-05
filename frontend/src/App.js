import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homescreen from './Screen/Homescreen/Homescreen';
import Registerscreen from './Screen/Registerscreen/Registerscreen';
import Loginscreen from './Screen/Loginscreen/Loginscreen';
import Adminscreen from './Screen/Adminscreen/Adminscreen';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Route path="/" exact component={Homescreen} />
        <Route path="/register" exact component={Registerscreen} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/admin" component={Adminscreen} />
      </Router>
    </div>
  );
}

export default App;
