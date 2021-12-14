import axios from "axios"

export const articleAPI = {
    getArticle(articlesLimit = 10) {
        return axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${articlesLimit}` )
            .then(response => response.data)
    },

    getChoosedArticle(articleId) {
        return axios.get(`https://api.spaceflightnewsapi.net/v3/articles/` + articleId)
            .then(response => response.data)
    }
}