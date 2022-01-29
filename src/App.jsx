import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import Card from "./components/Card/Card";
import React, { useState, useEffect } from "react";
function App() {
  let [pageNumber, setPageNumber] = useState(1);
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  let [search, setSearch] = useState("");

  // fetched data
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;
console.log(fetchedData);

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
   

  // Whenever api changes I want to fetch new data
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      {/* title starts here */}
      <h1 className="text-center ubuntu my-4">
        Rick and Morty <span className="text-primary">WiKi</span>{" "}
      </h1>
      {/* title ends here */}

 {/* Search bar */}
 <Search setSearch={setSearch} setPageNumber={setPageNumber}/>

      <div className="container">
        <div className="row">
           
            <Filter />
         
          <div className="col-8">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>      
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
