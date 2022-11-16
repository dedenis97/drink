import './App.scss';
import Homepage from './components/homepage';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Drink from './components/drink/drink';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/drink" element={<Drink/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
