
const types= require( "../actiontypes");

export const PAGE_PATHS={
    HOME:'/',
    INFO:'/INFO'
};

const IntialState=localStorage.commonState?JSON.parse(localStorage.commonState) :{
    CurPage:PAGE_PATHS.HOME,
    CurInput:'',
    CurPaginationPage:1,
    CurReposArray: [],
    TotalResultCount:10,
    CurContributors:[],
    NeedFetchContributors: false,
};
export const  AppReducer=(state=IntialState, action)=>{
    switch (action.type) {
        case types.NEW_SEARCH_INPUT: return {...state, CurInput: action.payload};
        case types.DEFINE_REPOSITORY_SEARCH_ARRAY: return {...state, CurReposArray: action.payload};
        case types.SELECT_PAGE: return {...state, CurPaginationPage: action.payload};
        case types.UPDATE_TOTAL_RESULT_COUNT: return {...state, TotalResultCount: action.payload};
        case types.DEFINE_CONTRIBUTORS: return {...state, CurContributors: action.payload};
        case types.NEED_GET_CONTRIBUTORS: return {...state, NeedFetchContributors: action.payload};
        default: return state
    }
};