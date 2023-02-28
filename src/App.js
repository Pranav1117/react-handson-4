import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Student from './Component/Student';
import Home from './Component/Home';
import Contactus from './Component/Contactus';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Student" element={<Student/>}></Route>
        <Route path= "/Contactus" element={<Contactus/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
