import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const ComicsList = () => {
  return (
    <div className="comics__list">
      <ul className="comics__grid">
        <li className="comics__item">
          <a href="#">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={xMen} alt="x-men" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={xMen} alt="x-men" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={xMen} alt="x-men" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </a>
        </li>
        <li className="comics__item">
          <a href="#">
            <img src={uw} alt="ultimate war" className="comics__item-img" />
            <div className="comics__item-name">
              ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB
            </div>
            <div className="comics__item-price">9.99$</div>
          </a>
        </li>
        <li className="comics__item">
          <Link to={`/comics/${item.id}`}>
            <img src={xMen} alt="x-men" className="comics__item-img" />
            <div className="comics__item-name">X-Men: Days of Future Past</div>
            <div className="comics__item-price">NOT AVAILABLE</div>
          </Link>
        </li>
      </ul>
      <button className="button button__main button__long">
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default ComicsList;
