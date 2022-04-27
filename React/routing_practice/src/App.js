import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';


const Home = (props) => {
  return (
    <div>
      <h1>Welcome!</h1>
    </div>
  )
}


function Number() {
  const {number} = useParams();
  return (
    <div>
      <h1>{number}</h1>
    </div>
  )
}

function Word() {
  const {word} = useParams();
  return (
    <div>
      <h1>{word}</h1>
    </div>
  )
}

function Color() {
  const {color} = useParams();
  const {bgColor} = useParams();
  return (
    <div style= {{ backgroundColor: useParams(bgColor)}} >
      <h1 style = {{color: useParams(color)}}> Welcome! </h1>
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:number" element={<Number />} />
          <Route path="/:word" element={<Word />} />
          <Route path="/:color/:bgColor" element={<Color />} />



        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
