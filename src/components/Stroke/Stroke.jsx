import "./Stroke.css";

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
  return (
    <div className={`table__stroke ${hover}-stroke`}>
        <div className={`block ${title} ${hover}-block`}>{id}</div>
        <div className={`block ${title} ${hover}-block`}>{name}</div>
        <div className={`block ${title} ${hover}-block`}>{view}</div>
        <div className={`block ${title} ${hover}-block`}>{dateStart}</div>
        <div className={`block ${title} ${hover}-block`}>{number}</div>
        <div className={`block ${title} ${hover}-block`}><a className={Link} href={skan}>{nameSkan}</a></div>
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
