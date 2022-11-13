import './App.css';

function App() {
  console.log("Your process.env.PUBLIC_URL", process.env.PUBLIC_URL);
  return (
    <div className="App">
      <div className="zaglu__block-content">
        <div className="zaglu__logo-wrp">
          Loren Holdings
        </div>
        <div className="zaglu__text">
          THE REAL ESTATE COMPANY
        </div>
        <div className="text-soon">
          Evan Weber: weberev@gmail.com
        </div>
      </div>
    </div>
  );
}

export default App;