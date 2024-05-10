
import './App.css';
import CounterClass from './components/counter_class';
import CounterFunction from './components/counter_function';
import Header from './components/header';
import AddStudent from './components/Add_Student';
import {Route, BrowserRouter as Router, Routes, route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Header/>
        <Routes>
        <Route path="/add" exact Component={AddStudent} />
        </Routes>
        
        
      </div>
    </Router>
  );
}

export default App;

