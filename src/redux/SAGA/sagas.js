import {takeEvery, put, call, select, throttle} from 'redux-saga/effects';
import {defineRepositorySearchArray, selectPage, updateTotalResultCount, needGetContributors,defineContributors} from "../actions";
const types= require( "../actiontypes");

export function* sagaWatcher() {
   yield throttle(1000, types.NEW_SEARCH_INPUT, sagaFindReposWorker);
   yield throttle(500, types.SELECT_PAGE, sagaSelectPageWorker);
   yield takeEvery(types.NEED_GET_CONTRIBUTORS,needGetContributorsWorker);
   yield takeEvery('*',saveToLocalStorage);
}
function* saveToLocalStorage() {
    let commonState=yield select(state=>state.common)
    localStorage.commonState=JSON.stringify(commonState);
}
function* needGetContributorsWorker(action) {
    if (action.payload) {
        let response=yield fetch(action.payload, {
            method: 'GET',
           /* headers: {
                Authorization: "token 1c302224de211bceea7c2894333520667f7b5ed5"
            },*/
        });
        let contributors=yield response.json();

        yield put(defineContributors(contributors.slice(0,10)));
        yield put(needGetContributors(false));
    }
}
function* sagaFindReposWorker(action) {
    const {CurInput,CurPaginationPage}=yield select(state => state.common);
    const repoName=action?action.payload:CurInput;
    let requirePaginationPage;
    if (CurInput!==repoName){
        yield put(selectPage(1));
        requirePaginationPage=1;
    }
    else {
        requirePaginationPage=CurPaginationPage;
    }
    const fetchURL=`https://api.github.com/search/repositories?q=${repoName?`${repoName}+in:name`:'stars:>1000'}&sort=stars&order=desc&per_page=10&page=${repoName?requirePaginationPage:1}`;
        const response = yield fetch(fetchURL,{
           method:"GET",
           /*headers:{
               Authorization: "token 1c302224de211bceea7c2894333520667f7b5ed5"
           }*/
        });
        if (response.ok) {
            const json = yield response.json();
            const repos=json.items;
            const totalCount=repoName?json.total_count:10;
            yield put(updateTotalResultCount(totalCount));
            yield put(defineRepositorySearchArray(repos));
        }

        else {
            yield put(defineRepositorySearchArray([]));
            yield put(updateTotalResultCount(0));
        };
}
function* sagaSelectPageWorker(action){
    yield call(sagaFindReposWorker);
}