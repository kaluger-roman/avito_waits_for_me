import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectPage} from "../../redux/actions";
const getPaginationRange=(maxPageCount,CurPaginationPage)=>{
    let start, end;
    if (maxPageCount<10){
        start=1;
        end=maxPageCount;
    }
    else if (CurPaginationPage<6){
        start=1;
        end=9;
    }else if((maxPageCount-CurPaginationPage)<5){
        start=maxPageCount-8;
        end=maxPageCount;
    }else {
        start=CurPaginationPage-4;
        end=CurPaginationPage+4;
    }
    return {start,end}
};
export const Paginator =()=>{
   const {CurPaginationPage,TotalResultCount, CurInput}=useSelector(state=>state.common);
    const dispatch=useDispatch();
    let maxPageCount=TotalResultCount>1000?100:Math.ceil(TotalResultCount/10);
    const ret=[];
    ret.push(<span key={'toFirst'} className={'PaginatorItem'}
                   onClick={(e)=>{
                       if(CurPaginationPage!==1) {
                           dispatch(selectPage(1));
                       }}
                   }>{CurPaginationPage<6?' ':'1'}</span>);
    ret.push(<span key={'prev'} className={'PaginatorItem'}
       onClick={(e)=>{
        if(CurPaginationPage!==1) {
            dispatch(selectPage(CurPaginationPage - 1));
        }}
       }>&lt;&lt;</span>);
    let {start,end}=getPaginationRange(maxPageCount, CurPaginationPage);

    for (let i=start; i<=end;i++){
        ret.push(
                <span key={i} className={`PaginatorItem ${CurPaginationPage===i?'selected':''}`} onMouseDown={(e)=>{dispatch(selectPage(i))}}>
                    {i}
                </span>
            )
    }
    ret.push(<span key={'next'} className={'PaginatorItem'}  onClick={(e)=>{
        if(CurPaginationPage!==maxPageCount) {
            dispatch(selectPage(CurPaginationPage + 1));
        }
    }
    }
    >&gt;&gt;
    </span>);
    ret.push(<span key={'toLast'} className={'PaginatorItem'}
                   onClick={(e)=>{
                       if(CurPaginationPage!==maxPageCount) {
                           dispatch(selectPage(maxPageCount));
                       }}
                   }>{CurPaginationPage>maxPageCount-5?' ':maxPageCount}</span>);
    return(
       <div onMouseDown={(e)=>e.preventDefault()}
                   className={'Paginator'}>
           {ret}
       </div>
    )

};