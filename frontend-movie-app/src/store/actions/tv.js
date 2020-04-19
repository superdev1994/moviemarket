import * as actionTypes from './actionTypes';
import { movieURI } from '../../URL/URL';

function tvAiringTodayStart() {
    return {
        type: actionTypes.FETCH_TV_AIRING_TODAY_START
    }
}
function tvAiringTodaySuccess(airingToday) {
    return {
        type: actionTypes.FETCH_TV_AIRING_TODAY_SUCCESS,
        airingToday: airingToday
    }
}
function tvAiringTodayFail() {
    return {
        type: actionTypes.FETCH_TV_AIRING_TODAY_FAIL
    }
}
export const FetchTVAiringToday = () => {
    return dispatch => {
        dispatch(tvAiringTodayStart());
        movieURI.get('/tv/airing_today')
            .then(res => {
                dispatch(tvAiringTodaySuccess(res.data));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvAiringTodayFail());
            })
    }
}
// ---------------------------------------------------------------
function tvOnTheAirStart() {
    return {
        type: actionTypes.FETCH_TV_ON_THE_AIR_START
    }
}
function tvOnTheAirSuccess(onTheAir) {
    return {
        type: actionTypes.FETCH_TV_ON_THE_AIR_SUCCESS,
        onTheAir: onTheAir
    }
}
function tvOnTheAirFail() {
    return {
        type: actionTypes.FETCH_TV_ON_THE_AIR_FAIL
    }
}
export const FetchTVOnTheAir = () => {
    return dispatch => {
        dispatch(tvOnTheAirStart());
        movieURI.get('/tv/on_the_air')
            .then(res => {
                dispatch(tvOnTheAirSuccess(res.data));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvOnTheAirFail());
            })
    }
}
// ---------------------------------------------------------------
function tvTopRatedStart() {
    return {
        type: actionTypes.FETCH_TV_TOP_RATED_START
    }
}
function tvTopRatedSuccess(topRated) {
    return {
        type: actionTypes.FETCH_TV_TOP_RATED_SUCCESS,
        topRated: topRated
    }
}
function tvTopRatedFail() {
    return {
        type: actionTypes.FETCH_TV_TOP_RATED_FAIL
    }
}
export const FetchTVTopRated = () => {
    return dispatch => {
        dispatch(tvTopRatedStart());
        movieURI.get('/tv/top_rated')
            .then(res => {
                dispatch(tvTopRatedSuccess(res.data));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvTopRatedFail());
            })
    }
}
// ---------------------------------------------------------------
function tvPopularStart() {
    return {
        type: actionTypes.FETCH_TV_POPULAR_START
    }
}
function tvPopularSuccess(popular) {
    return {
        type: actionTypes.FETCH_TV_POPULAR_SUCCESS,
        popular: popular
    }
}
function tvPopularFail() {
    return {
        type: actionTypes.FETCH_TV_POPULAR_FAIL
    }
}
export const FetchTVPopular = () => {
    return dispatch => {
        dispatch(tvPopularStart());
        movieURI.get('/tv/popular')
            .then(res => {
                dispatch(tvPopularSuccess(res.data));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvPopularFail());
            })
    }
}
//---------------------------------------------------------------
function tvGenreListStart() {
    return {
        type: actionTypes.FETCH_TV_GENRE_LIST_START
    }
}
function tvGenreListSuccess(genreList) {
    return {
        type: actionTypes.FETCH_TV_GENRE_LIST_SUCCESS,
        genreList: genreList
    }
}
function tvGenreListFail() {
    return {
        type: actionTypes.FETCH_TV_GENRE_LIST_FAIL
    }
}
export const FetchTVGenreList = () => {
    return dispatch => {
        dispatch(tvGenreListStart());
        movieURI.get('/tv/genre/list')
            .then(res => {
                dispatch(tvGenreListSuccess(res.data.genres));
            })
            .catch(err => {
                console.log(err.data)
                dispatch(tvGenreListFail());
            })
    }
}