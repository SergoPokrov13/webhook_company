import Stroke from "../Stroke/Stroke";
import "./Table.css";
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
} from "../../utils/utils";

function Table({ dataList, dataFiels, dataFiles }) {
  const addString = (element, name) => {
    if(dataFiels){
      return dataFiels[name].items.find((i) => i.ID == element)?.VALUE;
    }
  };

  const addFiles = (element) => {
    return dataFiles.find((i) => Object.values(i.PROPERTY_218)[0] == element)?.ID;
  };

  const dateParse = (date) => {
    if (date) {
      return new Date(Date.parse(date)).toLocaleDateString();
    } else {
      return "";
    }
  };

  return dataList.map((i) => (
    <Stroke
      id={i[ID]}
      name={i[TITLE]}
      view={addString(i[VIEW], VIEW)}
      dateStart={dateParse(i[DATE_START])}
      number={i[NUMBER]}
      Idskan={addFiles(i[ID])}
      Link="link"
      dateEnd={dateParse(i[DATE_END])}
      typeEnd={addString(i[TYPE_END], TYPE_END)}
      duration={addString(i[DURATION], DURATION)}
      price={i[PRICE]}
      conditionPrice={i[CONDITION_PRICE]}
      acCentere={i[ACCOUNTING_CENTERE]}
      adAgreements={i[AD_AGREEMENTS]}
      hover="hover"
    ></Stroke>
  ));
}

export default Table;
