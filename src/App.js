import Auth from './components/pages/auth/Auth';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ViewEmail from './components/pages/RenderMail/ViewEmail';
import RenderMail from './components/pages/RenderMail/RenderMail';
import ComposeMail from './components/pages/ComposeEmail/ComposeMail';


function App() {
  
  return (
    <div className="App">
      <NavBar/>
    <Routes>
      
      <Route index path="/" element={<Navigate to="/authentication" />} />
      <Route  path='/viewemail/:id/:render' element={<ViewEmail/>} />
      <Route path='/inbox' element={<RenderMail render={'inbox'}/>} />
      <Route  path='/sent' element={<RenderMail render={'sent'}/>} />
      <Route  path='/composemail' element={<ComposeMail/>} />

      
      <Route  path='/authentication' element={<Auth/>} />
    </Routes>
    </div>
  );
}

export default App;
