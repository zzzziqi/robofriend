import React from "react";

// const Card = (props) => {
const Card = ({ id, name, email }) => {
  //   const { id, name, email } = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robot" src={`https://robohash.org/${id}?size=300x300`} />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
