import {Component} from "react";
import Catalog from "./Catalog";
import {connect} from "react-redux";
import {getArticle} from "../../Redux/catalog-reducer";

class CatalogContainer extends Component {
    componentDidMount() {
        this.props.getArticle(this.props.articlesLimit);
    }

    render() {
        return <div>
            <Catalog {...this.props}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    articles: state.catalog.articles,
    articlesLimit: state.catalog.articlesLimit
})

export default connect(mapStateToProps, {getArticle})(CatalogContainer);