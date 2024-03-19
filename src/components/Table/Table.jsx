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

function Table({ dataList, dataFiels }) {

  const addString = (element, name) => {
    dataFiels[name].items.map((i)=>{
      if(i.ID == element){
        console.log(i.VALUE)
      }
    })
  }


  return dataList.map((i) => (
    <Stroke
      id={i[ID]}
      name={i[TITLE]}
      view={addString(i[VIEW], VIEW)}
      dateStart={i.ufCrm12_1710838500}
      number={i.ufCrm12_1710838541}
      skan='пусто'
      dateEnd={i.ufCrm12_1710838610}
      typeEnd={addString(i[TYPE_END], TYPE_END)}
      duration={addString(i[DURATION], DURATION)}
      price={i.ufCrm12_1710838801}
      conditionPrice={i.ufCrm12_1710838839}
      acCentere={i.ufCrm12_1710838861}
      adAgreements={i.ufCrm12_1710838910}
    ></Stroke>
  ));
}

export default Table;
