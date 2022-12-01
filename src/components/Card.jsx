import React from "react";

export default function Card(props) {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>{props.name}</h2>
          <img src={props.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{props.tel}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  );
}
