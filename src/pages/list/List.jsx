import "./list.scss";
import React from 'react'
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import  Datatable  from "../../components/datatable/Datatable";

export const List = () => {
  return (
   <div className="list">
     <Sidebar />
     <div className="listContainer">
     <Navbar/>
     <Datatable />
     datatabble
     </div>
  
   </div>
  )
}
