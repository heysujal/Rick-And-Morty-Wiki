import React from "react";
import Gender from "./Category/Gender"
import Species from "./Category/Species"
import Status from "./Category/Status"
const Filter = ({setStatus, setPageNumber,setGender,setSpecies}) => {
  let clear= ()=>{
    setPageNumber(1)
    setStatus("")
setGender("")
setSpecies("")

  }
  return (
    <div className ="col-3">
      <h1 className ="text-center fw-bold">Filter</h1>
      <div
      onClick={clear}
        style={{ cursor: "pointer" }}
        className ="text-center text-decoration-underline text-primary mb-4"
      >
        Clear Filters
      </div>

      {/* ACCORDION */}
      <div className="accordion" id="accordionExample">
<Status setStatus={setStatus} setPageNumber={setPageNumber}/>
<Species setSpecies={setSpecies} setPageNumber={setPageNumber}/>
<Gender setGender={setGender} setPageNumber={setPageNumber} />

           
      </div>
    </div>
  );
};

export default Filter;
