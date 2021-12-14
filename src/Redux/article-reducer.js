import {articleAPI} from "../api/api";

const SET_CHOOSED_ARTICLE = 'SET_CHOOSED_ARTICLE';

let initialState = {
    article: {}
}

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOOSED_ARTICLE:
            return {
                ...state,
                article: action.article
            }
        default:
            return state;
    }
}

export const setChoosedArticle = (article) => ({type: SET_CHOOSED_ARTICLE, article});

export const getChoosedArticle = (articleId) => async (dispatch) => {
    let data = await articleAPI.getChoosedArticle(articleId);
    dispatch(setChoosedArticle(data));
};

export default articleReducer;