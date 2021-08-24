import React, { useState, useEffect } from "react";
import axios from "axios";

export default function User() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setuser(res.data);
    });
  }, []);
  return (
    <div className="container mt-5">
      <h4 className="text-secondary text-center"> User Details</h4>
      <div className="row">
        <div className="col">
        {user.length > 0 ? (
          <table className="table table-bordered">
            <thead className="table-dark text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>City</th>
                <th>Mail</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {user.map((data) => {
                return (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.address.city}</td>
                    <td>{data.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <span>No Data Found</span>
        )}
      </div>
      </div>
    </div>
  );
}
