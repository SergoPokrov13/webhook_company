import "./App.css";
import { getCurrentID, agreementList, agreementFields, listGet, setID} from "./api/bitrix-api";
import { useEffect, useState } from "react";
import Table from "./components/Table/Table.jsx";
import Stroke from "./components/Stroke/Stroke.jsx";

function App() {
  const [dataList, setDataList] = useState([]);
  const [dataFiels, setDataFiels] = useState([]);
  const [dataFiles, setDataFiles] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getCurrentID().then((data)=>{
      let id = data.options.GROUP_ID
      setID().then((data)=>{
        data.items.map((i)=>{
          if(Object.values(i.PROPERTY_1560) == id){
            agreementList(i.ID).then((data) => {
              let arrId = []
              data.items.map((i) => (
                arrId.push(i.id)
              ))
              listGet(arrId).then((data) => {
                setDataFiles(data)
              })
              console.log(data.items)
              setDataList(data.items);
            })
        
          }
        })
      })
    })

    agreementFields()
      .then((data) => {
        console.log(data.fields)
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
