// import './App.css';
import MasterContainer from './containers/MasterContainer';
import Clerk from './Clerk';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
<Router>
  <Routes>
    <Route>
    <Route exact path='/'  element={<Clerk/>}/>
    </Route>
  </Routes>
</Router>
      <MasterContainer />
    </>
  );
  }

export default App


