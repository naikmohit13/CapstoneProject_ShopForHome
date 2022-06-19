import React,{ useState} from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Login from './components/Login';
import Signin from './components/Signin';

function App() {

  const [isShowLogin, setIsShowLogin] = useState(false)
  
  const handleLoginClick = () => {
          setIsShowLogin((isShowLogin) => !isShowLogin)
  }

  return (
    <div className="App">
      <Header handleLoginClick={handleLoginClick}></Header>
      <Login isShowLogin={isShowLogin}></Login>
      <Signin></Signin>
      <Footer></Footer>
    </div>
  );
}

export default App;
