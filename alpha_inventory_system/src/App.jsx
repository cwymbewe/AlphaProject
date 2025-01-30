import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg?url'; // Updated to relative path
import './App.css';
import StockForm from './components/StockForm.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <img src={viteLogo} className="App-logo" alt="logo" />
        <h1>ALPHALP GAS INVENTORY MANAGEMENT</h1>
        <StockForm />
      </header>
    </div>
  );
}

export default App;
