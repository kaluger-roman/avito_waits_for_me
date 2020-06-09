const types= require( "./actiontypes");
export const ACTION_TYPES_TO_THROTTLE_MIDDLEWARE_CHECK_NOTNULL=[//тротлить естли пэйлоэд одинаковый

];

export function newSearchInput(newVal) {
    return ({
            type: types.NEW_SEARCH_INPUT,
            payload: newVal,
    })
}
export function defineRepositorySearchArray(newRepos) {
    return ({
        type: types.DEFINE_REPOSITORY_SEARCH_ARRAY,
        payload: newRepos,
    })
}
export function selectPage(pageNum) {
    return ({
        type: types.SELECT_PAGE,
        payload: pageNum,
    })
}
export function updateTotalResultCount(count) {
    return ({
        type: types.UPDATE_TOTAL_RESULT_COUNT,
        payload: count,
    })
}
export function defineContributors(contributors) {
    return ({
        type: types.DEFINE_CONTRIBUTORS,
        payload: contributors,
    })
}
export function needGetContributors(url) {
    return ({
        type: types.NEED_GET_CONTRIBUTORS,
        payload: url,
    })
}