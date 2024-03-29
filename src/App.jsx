import "./App.css";
import { getCurrentID, agreementList, agreementFields, listGet} from "./api/bitrix-api";
import { useEffect, useState } from "react";
import Table from "./components/Table/Table.jsx";
import Stroke from "./components/Stroke/Stroke.jsx";

function App() {
  const [id, setId] = useState("778");
  const [dataList, setDataList] = useState([]);
  const [dataFiels, setDataFiels] = useState([]);
  const [dataFiles, setDataFiles] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getCurrentID().then
    agreementList(id).then((data) => {
      let arrId = []
      data.items.map((i) => (
        arrId.push(i.id)
      ))
      listGet(arrId).then((data) => {
        setDataFiles(data)
      })
      // console.log(data.items)
      setDataList(data.items);
    })


    agreementFields()
      .then((data) => {
        // console.log(data.fields)
        setDataFiels(data.fields)
      })
      .finally(setLoad(true));
  }, []);


  return load ? (
    <>
      <Stroke
        id='ID'
        name='Название'
        view='Вид договора'
        dateStart='Дата начала договора'
        number='Номер документа'
        Link="no_link"
        title="title"
        isLoad={true}
        nameSkan='Скан подписанного документа'
        dateEnd='Дата окончания договора'
        typeEnd='Тип окончания договора'
        duration='Длительность'
        price='Стоимость'
        conditionPrice='Условия оплаты'
        acCentere='Центр учета'
      ></Stroke>
      <Table dataList={dataList} dataFiles={dataFiles} dataFiels={dataFiels}></Table>
    </>
  ) : (
    <>Загрузка...</>
  );
}

export default App;
