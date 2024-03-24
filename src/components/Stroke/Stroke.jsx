import "./Stroke.css";
import { useState } from "react";

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

  if (skan) {
    skanFiles = Object.values(skan)[0];
  }

  return (
    <div className={`table__stroke ${hover}-stroke`}>
      <div className={`block ${title} ${hover}-block`}>{id}</div>
      <div className={`block ${title} ${hover}-block`}>{name}</div>
      <div className={`block ${title} ${hover}-block`}>{view}</div>
      <div className={`block ${title} ${hover}-block`}>{dateStart}</div>
      <div className={`block ${title} ${hover}-block`}>{number}</div>
      <div className={`block ${title} ${hover}-block`}>
        {nameSkan}
        {skanFiles.map((i) => (
          <a
            className={Link}
            key={i}
            href={`https://itr24.bitrix24.ru/bitrix/services/main/ajax.php?action=disk.api.documentService.goToPreview&serviceCode=onlyoffice&attachedObjectId=${i}&versionId=0&IFRAME=Y&IFRAME_TYPE=SIDE_SLIDER`}
          >
            {i}
          </a>
        ))}
      </div>
      <div className={`block ${title} ${hover}-block`}>{dateEnd}</div>
      <div className={`block ${title} ${hover}-block`}>{typeEnd}</div>
      <div className={`block ${title} ${hover}-block`}>{duration}</div>
      <div className={`block ${title} ${hover}-block`}>{price}</div>
      <div className={`block ${title} ${hover}-block`}>{conditionPrice}</div>
      <div className={`block ${title} ${hover}-block`}>{acCentere}</div>
      <div className={`block ${title} ${hover}-block`}>{adAgreements}</div>
    </div>
  );
}

export default Stroke;
