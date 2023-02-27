import React from "react";
import { addListAction } from "../../../Redux/Actions/addlistAction";
import { AiFillLike } from 'react-icons/ai'
import {  StarFill } from "react-bootstrap-icons";
import { useDispatch} from "react-redux";
import "./Movie.css";
import { Link } from "react-router-dom";

export function Movie({ props, wth }) {
  const dispatch = useDispatch();

  return (
    
    <div className="Movie" style={{width: wth}}>
      <div className="movie-item ">
        <div className="heart" >
          <AiFillLike className="like" onClick={()=>dispatch(addListAction(props.imdbID, props.Title, props.Poster, props.Year))}/>
        </div>
        <div className="poster">
          <img src={props.Poster} alt="poster"></img>
        </div>
        <Link to={`movie/${props.imdbID}`} style={{ textDecoration: 'none' }}>
        <div className="infos">
          <p className="imdb">
            <StarFill style={{ color: "rgb(255, 204, 0)" ,paddingRight:'5px' }} />
             {props.Year}
          </p>
          <p className="name">{props.Title}</p>
        </div>
        </Link>
      </div>
    </div>
    
  );
}
