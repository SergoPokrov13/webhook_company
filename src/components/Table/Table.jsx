import Stroke from "../Stroke/Stroke";
import { useState, useEffect } from "react";
import {
  TITLE,
  ID,
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
  TYPE_DOCUMENT,
  TYPE_AGREEMENT,
} from "../../utils/utils";

function Table({ dataList, dataFiels, dataFiles }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (dataList) {
      let arr = [];
      dataList.map((i) => {
        if (i[TYPE_DOCUMENT] == TYPE_AGREEMENT) {
          arr.push(i);
          i[AD_AGREEMENTS].map((items) => {
            dataList.map((i) => {
              if (i[ID] == items) {
                arr.push(i);
              }
            });
          });
          setData(arr);
        }
      });
    }
  }, [dataList]);

  const addString = (element, name) => {
    if (dataFiels) {
      return dataFiels[name].items.find((i) => i.ID == element)?.VALUE;
    }
  };

  const addFiles = (element) => {
    return dataFiles.find((i) => Object.values(i.PROPERTY_1652) == element)
      ?.ID;

  };

  const dateParse = (date) => {
    if (date) {
      return new Date(Date.parse(date)).toLocaleDateString();
    } else {
      return "";
    }
  };

  // console.log(data);

  if (data) {
    return data.map((i) => (
      <Stroke
        id={i[ID]}
        name={i[TITLE]}
        view={addString(i[VIEW], VIEW)}
        dateStart={dateParse(i[DATE_START])}
        number={i[NUMBER]}
        Idskan={addFiles(i[ID])}
        Link='link'
        dateEnd={dateParse(i[DATE_END])}
        typeEnd={addString(i[TYPE_END], TYPE_END)}
        duration={addString(i[DURATION], DURATION)}
        price={i[PRICE]}
        conditionPrice={i[CONDITION_PRICE]}
        acCentere={i[ACCOUNTING_CENTERE]}
        hover='hover'
        type={i[TYPE_DOCUMENT]}
      ></Stroke>
    ));
  } else {
    return <>Загрузка...</>;
  }
}

export default Table;
