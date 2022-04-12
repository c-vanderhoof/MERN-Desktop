import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  const personcards = [
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 36,
      hairColor: 'Brown'
    },
    {
      firstName:'Tom',
      lastName: 'Hanks',
      age: 40,
      hairColor: 'Black'
    },
    {
      firstName: 'Tim',
      lastName: 'Tebow',
      age: 30,
      hairColor: 'Blonde'
    },
    {
      firstName: 'Frank',
      lastName: 'Ocean',
      age:32,
      hairColor: 'Black' 
    }
  ];
  return (
    <div className="App">
      {personcards.map((personcard) => {
        return <PersonCard personcard = { personcard }/>;
      })}
    </div>
  )
}

export default App;
