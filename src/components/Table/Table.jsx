import "./Table.css";

function Table({name, file}) {

  return(
        <div className="table__stroke">
            <div className="block">Договор: {name}</div>
            <div className="block">Файл:<a href={file} download={true}>{file}</a></div>
        </div>
  )
}

export default Table;
