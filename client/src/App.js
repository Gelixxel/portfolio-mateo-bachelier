import logo from './logo.svg';
import './App.css';

function App() {
  // const [msg, setMsg] = useState('');

  const handleClick = async () => {
    console.log('click')
    // const data = await window.fetch('/api/portfolio')
    // const jsonData = await data.json()
    // console.log(jsonData)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleClick}>
          Say Hello
        </button>
        <p>{"oui"}</p>
      </header>
    </div>
  );
}

export default App;
