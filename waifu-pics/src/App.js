import useData from "./Components/useData.js";
import WaifuPic from "./Components/WaifuPic.js"
import { ClipLoader } from "react-spinners";
import './App.css';

function App() {

  const { picData: waifuUrl, isLoading: loading } = useData();

  return (
    <div className="App">
      {loading && <ClipLoader />}
      {!loading && <WaifuPic url={waifuUrl} />}
    </div>
  );
}

export default App;
