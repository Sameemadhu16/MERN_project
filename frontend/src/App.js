
import './App.css';
import CounterClass from './components/counter_class';
import CounterFunction from './components/counter_function';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <CounterClass></CounterClass>
      <CounterFunction></CounterFunction>
    </div>
  );
}

export default App;

