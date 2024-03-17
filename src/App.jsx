import "./App.css";
import { getCurrentID, taskGet } from "./api/bitrix-api";
import { useEffect, useState } from "react";
import Table from "./components/Table/Table.jsx";

function App() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getCurrentID();
    taskGet(778)
      .then((data) => {
        console.log(data.items);
        setData(data.items);
      })
      .finally(setLoad(true));
  }, []);

  return load ? (
    data.map((i) => 
    <Table name={i.title} file={i.ufCrm12_1709726438[0].url}></Table>
    )
  ) : (<>Загрузка...</>
  );
}

export default App;
