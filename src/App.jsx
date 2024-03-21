import "./App.css";
import { getCurrentID, agreementList, agreementFields, listGet, listField } from "./api/bitrix-api";
import { useEffect, useState } from "react";
import Table from "./components/Table/Table.jsx";
import Stroke from "./components/Stroke/Stroke.jsx";

function App() {
  const [id, setId] = useState("778");
  const [dataList, setDataList] = useState([]);
  const [dataFiels, setDataFiels] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getCurrentID().then
    agreementList(id).then((data) => {
      let arr = []
      data.items.map((i)=>( 
        arr.push(i.id)
      ))
      listGet(arr).then()
      // listField(arr).then(console.log)
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
        nameSkan='Скан подписанного документа'
        dateEnd='Дата окончания договора'
        typeEnd='Тип окончания договора'
        duration='Длительность'
        price='Стоимость'
        conditionPrice='Условия оплаты'
        acCentere='Центр учета'
        adAgreements='Доп. Соглашения'
      ></Stroke>
      <Table dataList={dataList} dataFiels={dataFiels}></Table>
    </>
  ) : (
    <>Загрузка...</>
  );
}

export default App;
