import React from 'react';
import ReactPaginate from 'react-paginate';

 const Pagination = ({pageNumber, setPageNumber, info})=>{
// ? to fix error
  return <ReactPaginate  className="pagination gap-3 justify-content-center my-4"
  pageCount={info?.pages} 
  forcePage = {pageNumber===1? 0 : pageNumber -1}
  nextLabel = "Next"
  previousLabel = "Prev"
  nextclassNameName="btn btn-outline-primary"
  previousclassNameName="btn btn-outline-primary"
  pageLinkclassNameName="page-link"
  pageclassNameName = "page-item"
  activeclassNameName = "active"
   onPageChange={(data)=>{
     console.log(
       data.selected
     );
     setPageNumber(data.selected+1)
     
   }}

   />;

 }

export default Pagination;
