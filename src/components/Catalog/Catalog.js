import s from "./Catalog.module.css"
import Article from "./Article/Article";
import {useState} from "react";

const Catalog = (props) => {
    let [value, setValue] = useState('')

    const filteredArticles = props.articles.filter((article) => {
        return article.title.toLowerCase().includes(value.toLowerCase()) ||
            article.summary.toLowerCase().includes(value.toLowerCase())
    })

    return <div>
        <div className={s.form}>
            <form className={s.searchForm}>
                <input type={"text"}
                       placeholder={"Search article"}
                       className={s.searchInput}
                       onChange={(e) => {
                           setValue(e.target.value)
                       }}/>
            </form>
        </div>
        <div className={s.catalogBox}>
            {
                filteredArticles.map(a => <Article key={a.id}
                                                   id={a.id}
                                                   imageUrl={a.imageUrl}
                                                   title={a.title}
                                                   description={a.summary}/>)
            }
        </div>
    </div>

}

export default Catalog;