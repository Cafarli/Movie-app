import React, { useState } from "react";
import { AiFillDislike } from 'react-icons/ai'
import { useDispatch } from "react-redux";
import { removeListAction } from "../../../Redux/Actions/removelistAction";
import "./ListMovie.css";

export function ListMovie({item}) {
  const dispatch = useDispatch()

  return (
    <div className="ListMovie">
      <div className="item ">
        
          <div className="movie-poster">
            <img src={item.poster} alt="poster"></img>
          </div>

        <div className="movie-info">
            <div className="movie-name ">
              <p className="movie-title">{item.movieTitle} </p>
              <p className="year"> {item.movieYear} </p>
            </div>
            <div  onClick={()=>  dispatch(removeListAction(item.movieID))} className="del-heart" >
              <AiFillDislike className="dislike"/>
              
            </div>
        </div>
      </div>
    </div>
  );
}
