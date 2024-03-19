import "./Stroke.css";

function Stroke({
  id,
  name,
  view,
  dateStart,
  number,
  skan,
  dateEnd,
  typeEnd,
  duration,
  price,
  conditionPrice,
  acCentere,
  adAgreements,
}) {
  return (
    <div className="table__stroke">
        <div className="block">{id}</div>
        <div className="block">{name}</div>
        <div className="block">{view}</div>
        <div className="block">{dateStart}</div>
        <div className="block">{number}</div>
        <div className="block">{skan}</div>
        <div className="block">{dateEnd}</div>
        <div className="block">{typeEnd}</div>
        <div className="block">{duration}</div>
        <div className="block">{price}</div>
        <div className="block">{conditionPrice}</div>
        <div className="block">{acCentere}</div>
        <div className="block">{adAgreements}</div>
    </div>
  );
}

export default Stroke;
