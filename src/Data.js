import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./datatable.css";
import { userColumns, userRows } from "./Datasource";

export default function DataTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  // const submitButton = async (e) => {
  //   e.preventDefault();
  //   const response = await fetch("http://localhost:5000/api/users")
  //     .then((res) => res.json())
  //     .then((json) => setData(json));
  // };
  const getData = async () => {
    const response = await fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  useEffect(() => {
    getData();
  }, []);

  const keys = ["firstname", "lastname", "email"];
  const searchdata = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].includes(search))
    );
  };

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  console.log(searchdata(data));

  return (
    <>
      <div className="container">
        <div className="searchBar">
          <input type="text" placeholder="search...." onChange={handleSearch} />
        </div>
        <h3>Filters</h3>
      </div>

      <div style={{ height: 400, width: "100%" }}>
        {search ? (
          <DataGrid
            rows={searchdata(data)}
            getRowId={(row) => row._id}
            columns={userColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        ) : (
          <DataGrid
            rows={data}
            getRowId={(row) => row._id}
            columns={userColumns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        )}
      </div>
    </>
  );
}
