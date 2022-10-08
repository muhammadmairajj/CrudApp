import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
     <Routes>
      <Route exact path="/" element = { <Home /> } />
      <Route exact path="/contact" element = { <Contact /> } />
      <Route exact path="/about" element = { <About /> } />
      <Route path="/create" element = { <AddUser /> } />
      <Route path="/update" element = { <EditUser /> } />
      <Route path="/user/:id" element = { <User /> } />
     </Routes>
     </div>
    </Router>
  );
}

export default App;
