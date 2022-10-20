import './App.scss';
import { Techbook } from './components/Techbook';
import techbooks from './data/techbooks.json';

console.log(techbooks);

function App() {
  return (
    <div className="App">
      <h1>{techbooks.length} Tech Books</h1>
      <div className="books">
      {techbooks.map((techbook) => {
        return <Techbook techbook = {techbook}/>;
      })}
      </div>
    </div>
  )
}

export default App
