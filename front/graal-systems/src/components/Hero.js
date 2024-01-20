import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function Hero() {
  const [users, setUsers] = useState(null);

  // fetch data from the backend when component mounts
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/user/all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  return (
    <div className="wrapper">
      <h1>Graal Systems Project - Ahmed</h1>
      <em>A React JS Front & Java Spring Back Powered by MongoDB</em>
      <div>
        <div className="user__grid">
          {users &&
            users.map((user) => {
              return (
                <div className="user__item" key={user.id}>
                  <h2>{user.name}</h2>
                  <p>{user.studentEmail}</p>
                  <Link
                    className="user__info__btn"
                    to={"/user-info/" + user.id}
                  >
                    See more info
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Hero;
