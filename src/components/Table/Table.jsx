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
    return dataFiels[name].items.find((i) => i.ID == element)?.VALUE;
  };

  const addFiles = (element) => {
     return dataFiles.map((i) =>{
      if(Object.values(i.PROPERTY_218)[0] == element){
        return `https://itr24.bitrix24.ru/bitrix/services/main/ajax.php?action=disk.api.documentService.goToPreview&serviceCode=onlyoffice&objectId=${Object.values(i.PROPERTY_216)[0]}&attachedObjectId=0&versionId=0&IFRAME=Y&IFRAME_TYPE=SIDE_SLIDER`
      }});
  };

  const dateParse = (date) => {
    if (date) {
      return new Date(Date.parse(date)).toLocaleDateString();
    } else {
      return "";
    }
  };

  dataFiles.map((item) =>{
    // console.log(Object.values(item.PROPERTY_218)[0])
  })

  return dataList.map((i) => (
    <Stroke
      id={i[ID]}
      name={i[TITLE]}
      view={addString(i[VIEW], VIEW)}
      dateStart={dateParse(i[DATE_START])}
      number={i[NUMBER]}
      skan={addFiles(i[ID])}
      Link="link"
      nameSkan={addFiles(i[ID])}
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
