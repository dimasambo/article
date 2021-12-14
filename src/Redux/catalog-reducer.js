import {articleAPI} from "../api/api";

const SET_ARTICLE = 'SET_ARTICLE';

let initialState = {
    articles: [],
    articlesLimit: 35
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ARTICLE:
            return {
                ...state,
                articles: action.articles
            }
        default:
            return state;
    }
}

export const setArticle = (articles) => ({type: SET_ARTICLE, articles});

export const getArticle = (articlesLimit) => async (dispatch) => {
    let data = await articleAPI.getArticle(articlesLimit);
    dispatch(setArticle(data));
};

export default catalogReducer;