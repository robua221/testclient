import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const submitButton = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  return (
    <div>
      <h1>table</h1>
      <button onClick={submitButton}>Submit</button>
      {data.map((d) => {
        return (
          <table key={d.id}>
            <tbody>
              <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
              </tr>
              <tr>
                <td>{d.usid}</td>
                <td>{d.firstname}</td>
                <td>{d.lastname}</td>
                <td>{d.email}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Table;
