import { ACTION_TYPES } from "../actionTypes";

export const removeListAction = (movieID,  ) => {
console.log("remove sction ", movieID)
    return {
        type: ACTION_TYPES.REMOVE_LIST,
        movies: { movieID: movieID }
    }
};