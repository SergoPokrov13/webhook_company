import "./Stroke.css";
import { setIdFile, diskGet } from "../../api/bitrix-api";
import { useState, useEffect } from "react";

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
  adAgreements,
  hover,
}) {
  const [skanFiles, setSkanFiles] = useState([]);
  const [fetch, setFetch] = useState(false);

  if (fetch == false) {
    if (skanFiles.length == 0) {
      setIdFile(Idskan).then((data) => {
        setSkanFiles([...skanFiles, data.OBJECT_ID]);
      });
    } else {
      setIdFile(Idskan).then((data) => {
        skanFiles.map((i) => {
          if (i == data.OBJECT_ID) {
            skanFiles.filter((el) => el !== i);
          } else {
            setSkanFiles([...skanFiles, data.OBJECT_ID]);
            setFetch(true);
          }
        });
      });
    }
  }

  const addNameFile = (id) =>{
    diskGet(id).then((data)=>{
      console.log(data.NAME)
      return data.NAME
    })
  }

  console.log(skanFiles, fetch)

  return fetch ?(
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
        <p className="text">{nameSkan}</p>
        {
        skanFiles.map((i) => {
              <a
                className={Link}
                key={i}
                target='_blank'
                href={`https://itr24.bitrix24.ru/bitrix/services/main/ajax.php?action=disk.api.documentService.goToPreview&serviceCode=onlyoffice&attachedObjectId=${i}&versionId=0&IFRAME=Y&IFRAME_TYPE=SIDE_SLIDER`}
              >
                ddddd{/* {addNameFile(i)} */}
              </a>
              console.log(i)
            })
  
          }
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
  )
  :
  ''
}

export default Stroke;

// {/* {fileId.map((i) => ( */}
// {Idskan ?
//   <a
//     className={Link}
//     // key={i}
//     target='_blank'
//     href={`https://itr24.bitrix24.ru/bitrix/services/main/ajax.php?action=disk.api.documentService.goToPreview&serviceCode=onlyoffice&attachedObjectId=${Idskan}&versionId=0&IFRAME=Y&IFRAME_TYPE=SIDE_SLIDER`}
//   >
//     swww
//   </a>
//   :
//   ''
//   }
// {/* // ))} */}
