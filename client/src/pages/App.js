
import './App.css';
import Header from '../components/header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Outlet/>
    <Footer/>

    </div>
  );
}

export default App;
