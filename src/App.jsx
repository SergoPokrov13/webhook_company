import "./App.css";
import {getCurrentID,taskGet} from "./api/bitrix-api"
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getCurrentID().then(console.log)
    taskGet().then(console.log)
  }, []);

  return(
  <>
    <p>Hello World</p>
  </>)
}

export default App;
