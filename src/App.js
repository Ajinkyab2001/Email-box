import Auth from './components/pages/auth/Auth';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ViewEmail from './components/pages/RenderMail/ViewEmail';
import RenderMail from './components/pages/RenderMail/RenderMail';
import ComposeMail from './components/pages/ComposeEmail/ComposeMail';
// import PrivateComponent from './components/pages/PrivateComponent';

function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      {/* <Route element={<PrivateComponent/>}> */}
      <Route exact path='/viewemail/:id/:render' element={<ViewEmail/>} />
      <Route exact path='/' element={<RenderMail render={'inbox'}/>} />
      <Route exact path='/sent' element={<RenderMail render={'sent'}/>} />
      <Route exact path='/composemail' element={<ComposeMail/>} />

      {/* </Route> */}
      <Route exact path='/authentication' element={<Auth/>} />
    </Routes>
    </div>
  );
}

export default App;
