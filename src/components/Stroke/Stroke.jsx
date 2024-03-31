import "./Stroke.css";
import { setIdFile, diskGet, addObject } from "../../api/bitrix-api";
import { useState, useEffect } from "react";
import {
  TYPE_CONVENTION,
  TYPE_AGREEMENT,
} from "../../utils/utils";

function Stroke({
  id,
  name,
  view,
  dateStart,
  number,
  Idskan,
  Link,
  title,
  nameSkan,
  dateEnd,
  typeEnd,
  duration,
  price,
  conditionPrice,
  acCentere,
  hover,
  type
}) {
  const [Object, setObject] = useState();
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    if (Idskan) {
      setIdFile(Idskan).then((data) => {
        console.log(data)
        let lenghID = data.length;
        let arr= []
        data.map((i)=>{
          addObject(i).then((data)=>{
            diskGet(data.OBJECT_ID).then((data)=>{
              console.log(data)
              let object =
                {
                  id: data.ID,
                  name: data.NAME,
                }
                arr.push(object)
                setObject(arr)
                if(arr.length == lenghID){
                  setIsLoad(true)
                }
            })
          })
        })
      })
    }
  }, [Idskan]);


  return (
    <div className={`table__stroke ${hover}-stroke `}>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{id}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{number}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{name}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{view}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{dateStart}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{nameSkan}</p>
        {isLoad
          ? Object.map((i) => {
            console.log(i.id)
              return (
                <a
                  className={Link}
                  key={i}
                  target='_blank'
                  href={`https://caverion.bitrix24.ru/bitrix/services/main/ajax.php?action=disk.api.documentService.goToPreview&serviceCode=onlyoffice&objectId=${i.id}&versionId=0&IFRAME=Y&IFRAME_TYPE=SIDE_SLIDER`}
                >
                {i.name}
                </a>
              );
            })
          : ""}
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{dateEnd}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{typeEnd}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{duration}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{price}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{conditionPrice}</p>
      </div>
      <div className={`block ${title} ${hover}-block ${type == TYPE_CONVENTION ? 'convention' : ''} ${type == TYPE_AGREEMENT ? 'agreement' : ''}`}>
        <p className='text'>{acCentere}</p>
      </div>
    </div>
  );
}

export default Stroke;