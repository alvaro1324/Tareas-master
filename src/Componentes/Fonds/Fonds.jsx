import "./Fonds.css";
function Fonds({ changeFond }) {
  return (
    <div className="container_fonds_aplication">
      <span className="fond_item" onClick={()=>changeFond("fond-1")}></span>
      <span className="fond_item" onClick={()=>changeFond("fond-2")}></span>
      <span className="fond_item" onClick={()=>changeFond("fond-3")}></span>
      <span className="fond_item" onClick={()=>changeFond("fond-4")}></span>
      <span className="fond_item" onClick={()=>changeFond("fond-5")}></span>
      <span className="fond_item" onClick={()=>changeFond("fond-6")}></span>
    </div>
  );
}
export default Fonds;
