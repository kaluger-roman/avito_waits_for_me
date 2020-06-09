import {useParams, Redirect} from 'react-router-dom'
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {PAGE_PATHS} from "../../redux/Reducers/AppReducer";
import {defineContributors, needGetContributors} from "../../redux/actions";


export const RepoCard=()=>{
    const {CurReposArray,CurContributors}=useSelector(state=>state.common);
    let dispatch=useDispatch();
    let {name}=useParams();
    name=name.slice(1);
    const repoObj=CurReposArray.find(rep=>rep.name===name);

    useEffect(()=>{
        dispatch(needGetContributors(repoObj.contributors_url));
        return ()=>dispatch(defineContributors([]));
    },[]);
    return(
        <div className={'cardInfoContainer'}>
            {   repoObj?
              <div className={'CardInfo'}>
                  <div className={'avatarInfo bottomTopBorder verticalFontAlign'}>
                      <img src={repoObj.owner.avatar_url?repoObj.owner.avatar_url:'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png'}/>
                  </div>
                <div className={'nameInfo bottomTopBorder verticalFontAlign'}>
                    {name}
                </div>
                  <div className={'descInfo bottomTopBorder verticalFontAlign'}>
                      {repoObj.description}
                  </div>
                  <div className={'langHeader verticalFontAlign'}>
                      Язык:
                  </div >
                  <div className={'langInfo verticalFontAlign'}>
                          {repoObj.language}
                  </div>
                  <div className={'starsHeader verticalFontAlign'}>
                    Звезд:
                  </div >
                <div className={'starsInfo verticalFontAlign'}>
                    {repoObj.stargazers_count}
                </div>
                  <div className={'LastComHeader verticalFontAlign'}>
                      Последний коммит:
                  </div >
                <div className={'LastComInfo verticalFontAlign'}>
                    {repoObj.pushed_at?repoObj.pushed_at.slice(0,10):'Неизвестно'}
                </div>
                  <div className={'OwnerInfoHeader verticalFontAlign'}>
                      Владелец:
                  </div >
                  <div className={'OwnerInfo verticalFontAlign'}>
                      {repoObj.owner.login}
                      <br/>
                      <a href={repoObj.owner.html_url} target={'_blank'}>{repoObj.owner.html_url}</a>
                  </div>
                  <div className={'ContribInfo bottomTopBorder'}>
                      <span className={ 'verticalFontAlign'}> ЗАПОМНИ ЭТИХ ГЕРОЕВ:</span>
                          {CurContributors.length?CurContributors.map(c=><div className={'listItem verticalFontAlign'} key={c.login}>{c.login}</div>):<div></div>}
                  </div>
            </div>
            :<Redirect to={PAGE_PATHS.HOME}/>}
        </div>
    )
};