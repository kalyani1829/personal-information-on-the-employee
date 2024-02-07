import {BrowserRouter, Routes, Route} from  "react-router-dom";
import './App.css';
import AddMembers from './pages/AddMember';
function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path = "/" element = {<AddMembers />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
