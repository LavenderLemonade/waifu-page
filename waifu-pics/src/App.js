import WaifuPic from "./Components/WaifuPic.js"
import WaifuGetter from "./Components/WaifuGetter.js";
import { ClipLoader } from "react-spinners";
import './App.css';

function App() {

  const { picData, isLoading } = WaifuGetter();



  return (
    <div className="App">
      {isLoading && <ClipLoader />}
      {!isLoading && <WaifuPic url={picData} />}

    </div>
  );
}

export default App;
