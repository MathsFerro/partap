import { Route, Routes } from 'react-router-dom';
import { InitialPage } from './pages/InitialPage';
import { Login } from './pages/Login';

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/acompanhamento" element={ <InitialPage/> } />
      </Routes>
    </>
  );
}

export default App

//[colocarhexadecimal]
//https://phosphoricons.com/