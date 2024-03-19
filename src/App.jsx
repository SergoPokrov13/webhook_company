import "./App.css";
import { getCurrentID, agreementList, agreementFields } from "./api/bitrix-api";
import { useEffect, useState } from "react";
import Table from "./components/Table/Table.jsx";
import {
  TITLE,
  ID,
  SKAN,
  VIEW,
  DATE_START,
  DATE_END,
  NUMBER,
  TYPE_END,
  DURATION,
  PRICE,
  CONDITION_PRICE,
  ACCOUNTING_CENTERE,
  AD_AGREEMENTS,
} from "./utils/utils";
import Stroke from "./components/Stroke/Stroke.jsx";

function App() {
  const [id, setId] = useState("778");
  const [dataList, setDataList] = useState([]);
  const [dataFiels, setDataFiels] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    getCurrentID();
    agreementList(id).then((data) => {
      setDataList(data.items);
    })
    agreementFields()
    .then((data) => {
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
        skan='Скан подписанного документа'
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
