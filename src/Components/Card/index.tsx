import React from "react";
import "./index.css";

type IMovie = {
  imgSrc: string;
  title: string;
  text: string;
};

type IProps = {
  movie: IMovie;
};

const Card = ({ movie }: IProps) => {
  const { imgSrc, title, text } = movie;
  return (
    <div className="card">
      <img src={imgSrc} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
