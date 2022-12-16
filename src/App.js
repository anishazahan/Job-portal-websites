
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './Authentication/SignIn';
import SignUp from './Authentication/SignUp';
import Header from './Components/Shared/Header/Header'
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
   <Header></Header>
    <Routes>
    <Route path='/' element={<Home></Home>}> </Route>
    <Route path='/signIn' element={<SignIn></SignIn>}> </Route>
    <Route path='/SignUp' element={<SignUp></SignUp>}> </Route>
    </Routes>

  


      
    </>
  );
}

export default App;
