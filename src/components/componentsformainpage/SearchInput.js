import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import { newSearchInput} from './../../redux/actions'

export const SearchInput=()=>{
    const {CurInput}=useSelector(state=>state.common)
   const  dispatch=useDispatch();
    useEffect(()=>{
        if(!CurInput)
        dispatch(newSearchInput(''))
    },[]);

    return(
        <div className={'SearchInputContainer'}>
        <form onSubmit={e => {e.preventDefault(); dispatch(newSearchInput(document.getElementById('SearchInput').value))}} className={'formInput'}>
           <input
                  autoComplete={'off'}
                  placeholder={'Введите имя репозитория'}
                  className={'SearchInput'}
                  value={CurInput}
                  onChange={(e)=>dispatch(newSearchInput(e.target.value))}
                  id={'SearchInput'}
           />
        </form>
        </div>
    )
};