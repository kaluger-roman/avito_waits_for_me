import React from "react";
import {Link} from "react-router-dom";

export const ToHomePageButton=()=>{
    return(
        <div className={'HomeBtnContainer'}>
            <Link to={`/`}><img src={require("./../../img/icons8-широкая-стрелка-вправо-100.png")} className="homeBtn" /></Link>
            <span>Специальные подробности</span>
        </div>
    )
};