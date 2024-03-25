import "./Stroke.css";
import { setIdFile } from "../../api/bitrix-api";
import { useState, useEffect } from "react";

function Stroke({
  id,
  name,
  view,
  dateStart,
  number,
  skan,
  Link,
  title,
  nameSkan,
  dateEnd,
  typeEnd,
  duration,
  price,
  conditionPrice,
  acCentere,
  adAgreements,
  hover,
}) {
  let skanFiles = [];
  const [fileId, setfileId] =useState([])
  const [listId, setListId] =useState(skan)

  useEffect(()=>{
    if (skan) {
      setIdFile(skan).then((data) => {
        data.items.map((i) => (
          skanFiles.push(i.id)
        ))
      });
    }
  }, listId)

  console.log(skanFiles)

  return (
    <div className={`table__stroke ${hover}-stroke`}>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{id}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{name}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{view}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{dateStart}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{number}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        {nameSkan}
        {fileId.map((i) => (
          <a
            className={Link}
            key={i}
            target='_blank'
            href={`https://itr24.bitrix24.ru/bitrix/services/main/ajax.php?action=disk.api.documentService.goToPreview&serviceCode=onlyoffice&attachedObjectId=${i}&versionId=0&IFRAME=Y&IFRAME_TYPE=SIDE_SLIDER`}
          >
            {}
          </a>
        ))}
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{dateEnd}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{typeEnd}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{duration}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{price}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{conditionPrice}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{acCentere}</p>
      </div>
      <div className={`block ${title} ${hover}-block`}>
        <p className='text'>{adAgreements}</p>
      </div>
    </div>
  );
}

export default Stroke;
