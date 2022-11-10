import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import SignUp  from './components/SignUp'
import Login from './components/Login';
import Contact from './components/Contact';
import PrivateComponent from './components/PrivateComponent';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route element = {<PrivateComponent />}>
          <Route path="/" element={<h1>Product listing Component</h1>} />
          <Route path="/add" element={<h1>Add Product Component</h1>} />
          <Route path="/update" element={<h1>Update Product Component</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="/profile" element={<h1>Profile Component</h1>} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        
          <Route path="/signup" element={<SignUp />} />   
          <Route path="/login" element={<Login />} />"   
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
