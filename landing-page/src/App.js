import logo from './logo.svg';
import Header from './components/header/header-landing';
import './App.css';

function App() {
  console.log(logo)
  return (
    <div className="App">
      <img className="logo" src={logo}/>
      <Header />
    </div>
  );
}

export default App;
