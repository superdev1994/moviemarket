import * as actionTypes from '../actions/actionTypes';

const initialState = {
    genreList: [],
    loading: true
}

export default function movieGenreListReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_MOVIE_GENRE_LIST_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIE_GENRE_LIST_SUCCESS:
            return {
                genreList: action.genreList,
                loading: false
            }
        case actionTypes.FETCH_MOVIE_GENRE_LIST_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state;
    }
}