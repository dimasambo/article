import s from "./Article.module.css"
import {NavLink} from "react-router-dom";

const Article = (props) => {
    return <div className={s.articleBox}>
        <div className={s.articleTitle}>
            <span>{props.title}</span>
        </div>
        <div className={s.articleImage}>
            <img src={props.imageUrl}/>
        </div>
        <div className={s.articleDescription}>
            {props.description.substr(0, 100)}
            {props.description.split("").length > 100 && "..."}
        </div>
        <div className={s.linkBox}>
            <NavLink to={"/article/" + props.id} className={s.link}>
                <span>More</span>
            </NavLink>
        </div>
    </div>
}

export default Article;