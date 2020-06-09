import React from 'react';
import {Link} from 'react-router-dom';
import './../../img/logo512.png'

export function CardforMainPage(props) {
    let {name,stars,lastCommit, url}=props;
    return (
        <React.Fragment>
            <div className='carddashboardmainpag3'>
                    <div className="front-side-1">
                        <div className={'header-Mainpageb3'}>
                            {name}
                        </div>
                        <div className={'infoTextCard'}>ПЕРЕВЕРНИ КАРТОЧКУ</div>
                    </div>
                    <div className="back-side-1">


                        <div className={'infoTextCard tableDefCol delim'}>
                            Звезд
                        </div>
                        <div className={'infoTextCard tableDefCol'}>
                            {stars}
                        </div>
                        <div className={'infoTextCard tableValCol delim'}>
                            Последний коммит
                        </div>
                        <div className={'infoTextCard tableValCol'}>
                            {lastCommit?lastCommit.slice(0,10):'Неизвестно'}
                        </div>
                        <div className={'infoTextCard tableDefCol delim'}>
                            Ссылка
                        </div>
                        <div className={'infoTextCard tableDefCol'}>
                            <a target={'_blank'} href={url}>{url}</a>
                        </div>
                        <div className={'infoTextCard tableValCol delim'}>
                            Подробно
                        </div>
                        <div className={'infoTextCard tableValCol'}>
                            <Link  to={`/info:${name}`}>ТЫК</Link>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}