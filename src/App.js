import Home from './Pages/Home/Home';
import style from './App.module.scss'

function App() {  
  return (
    <div className="App">
      <div className={style.container}>
        <Home />
      </div>      
    </div>
  );
}
export default App;
