import React from "react";
import Gender from "./Category/Gender"
import Species from "./Category/Species"
import Status from "./Category/Status"
const Filter = () => {
  return (
    <div className ="col-3">
      <h1 className ="text-center fw-bold">Filter</h1>
      <div
        style={{ cursor: "pointer" }}
        className ="text-center text-decoration-underline text-primary mb-4"
      >
        Clear Filters
      </div>

      {/* ACCORDION */}
      <div className="accordion" id="accordionExample">
<Status/>
<Species/>
<Gender/>

           
      </div>
    </div>
  );
};

export default Filter;
