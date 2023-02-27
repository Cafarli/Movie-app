import { ACTION_TYPES } from "../actionTypes";

const initialState = {
    titleList:'',
    movies: [
        { movieID: "", movieTitle: "", poster: "", movieYear: "", colored: false },
      ],
};

export function removeListReducer(state = initialState, action) {
    switch (action.type) {
        case ACTION_TYPES.GET_LIST:
            return { ...state, titleList: action.titleList, movies: action.movie}

        default:
            return state
    }
};