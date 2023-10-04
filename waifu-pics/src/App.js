import useData from "./Components/useData.js";
import './App.css';

function App() {

  const imgUrl = useData();

  return (
    <div className="App">
      <img src={imgUrl.picData}></img>

    </div>
  );
}

export default App;
