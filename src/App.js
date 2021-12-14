import './App.css';
import {HashRouter, Route} from "react-router-dom";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import store from "./Redux/redux-store";
import Header from "./components/Header/Header";
import CatalogContainer from "./components/Catalog/CatalogContainer";
import ArticlePageContainer from "./components/ArticlePage/ArticlePageContainer";

const App = (props) => {
    return <div className="app-wrapper">
        <Header />
        <div>
            <Route path={"/catalog"}
                   render={() => <CatalogContainer />}/>
            <Route path={'/article/:articleId?'}
                   render={() => <ArticlePageContainer />}/>
        </div>
    </div>
}

let mapStateToProps = (state) => ({})

let AppContainer = compose(
    connect(mapStateToProps)
)(App)

const ArticleApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default ArticleApp;
