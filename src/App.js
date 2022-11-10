import { Routes,Route } from 'react-router';
import Header from './component/Header';
 import Navbar from './component/Navbar';
 import Redux from './component/Redux';

 
// import Practise from './component/Practise';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/header" element={<Navbar />} />
    <Route path="/" element={<Header />} />
    <Route path="/Redux" element={<Redux />} />
    </Routes>
  
    </div>
  );
  }
export default App;
