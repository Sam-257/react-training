import React from "react";
import Card from "./Card";

type IMovie = {
  imgSrc: string;
  title: string;
  text: string;
};

type IProps = {
  moviesList: IMovie[];
};

const Movie = ({ moviesList }: IProps) => {
  console.log(moviesList);
  return (
    <div className="test">
      {moviesList.map((item: IMovie, index) => (
        <Card key={index} movie={item} />
      ))}
    </div>
  );
};

export default Movie;
