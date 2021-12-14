import {Component} from "react";
import ArticlePage from "./ArticlePage";
import {compose} from "redux";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getChoosedArticle} from "../../Redux/article-reducer";

class ArticlePageContainer extends Component {
    componentDidMount() {
        this.props.getChoosedArticle(this.props.match.params.articleId)
    }

    render() {
        return <div>
            <ArticlePage {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    imageUrl: state.article.article.imageUrl,
    title: state.article.article.title,
    description: state.article.article.summary,
    publishedAt: state.article.article.publishedAt,
    updatedAt: state.article.article.updatedAt
})

export default compose(
    connect(mapStateToProps, {getChoosedArticle}),
    withRouter
)(ArticlePageContainer);
