import { Routes,Route } from 'react-router';
import Header from './component/Header';
 import Navbar from './component/Navbar';
 import Redux from './component/Redux';
 import Materialui from './Material up/Materialui'
import Textfield from './Material up/Textfield';
import Homee from './Material up/Homee'
import { ImageList } from '@mui/material';
import Sidebar from './Material up/Sidebar'
// import Practise from './component/Practise';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/header" element={<Navbar />} />
    <Route path="/" element={<Header />} />
    <Route path="/materialui" element={<Materialui />} />
    <Route path="/Redux" element={<Redux />} />
    <Route path="/home" element={<Homee />} />
    <Route path="/text" element={<Textfield />} />
    <Route path="/side" element={<Sidebar />} />
    <Route path="/gallery" element={<ImageList/>} />
    </Routes>
  
    </div>
  );
  }
export default App;
