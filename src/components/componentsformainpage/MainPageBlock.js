import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as $ from 'jquery';
import {CardforMainPage} from "./cardforMainPage";

export default function MainPageBlock(props) {
    const {CurReposArray,TotalResultCount}=useSelector(state=>state.common);
    let ret=[];
    for (let i=0;i<CurReposArray.length;i++){
        const repo=CurReposArray[i];
        ret.push(<CardforMainPage name={repo.name}
                                  stars={repo.stargazers_count}
                                  lastCommit={repo.pushed_at}
                                  key={repo.id}
                                  url={repo.html_url}
                                  contributors_url={repo.contributors_url}
        />)
    }
    return (
        <React.Fragment>
            <div className={'MainPageDashBoard'}>
                {TotalResultCount === 0
                    ?<div className={'NotFoundNotification'}>УПС, ТУТ ВАРИАНТА ДВА: <br/>1) НЕ НАЙДЕНО (ВВЕДИТЕ ВЕРНОЕ ИМЯ)	<br/>2) ПРЕВЫШЕНО КОЛИЧЕСТВО НЕАВТОРИЗОВАННЫХ ЗАПРОСОВ В МИНУТУ(>10), ПРИДЕТСЯ ПОДОЖДАТЬ</div>
                    :<div className={'SingleDashboardPage'}>{ret}</div>
                }
            </div>
        </React.Fragment>
    );
}

