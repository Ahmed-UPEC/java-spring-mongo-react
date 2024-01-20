import React from "react";
import { useState, useEffect } from "react";

import { useParams, Link } from "react-router-dom";

export default function UserInfo() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  // fetch data from the backend when component mounts
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/user/user-info?id=" + id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div className="wrapper">
      {user && ( // if user is not null
        <>
          <div>
            <h1>User : {user[0].name} </h1>
          </div>
          <div>
            <div className="user__item" key={user[0].id}>
              <p>Age : {user[0].age}</p>
              <p>Student Emaill : {user[0].studentEmail}</p>
              <p>Student Id : {user[0].studentId}</p>
              <p>Loves working on : {user[0].subject}</p>
              <p>Creation Date : {user[0].createdAt}</p>
              <p>
                Database ID : <strong>{user[0].id}</strong>
              </p>
              <Link className="user__info__btn" to="/">
                Back to All Users
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
