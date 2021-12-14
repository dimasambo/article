import s from "./ArticlePage.module.css"

const ArticlePage = (props) => {
    return <div className={s.box}>
        <div className={s.title}>
            <span>{props.title}</span>
        </div>
        <div className={s.mainBlock}>
            <img src={props.imageUrl}/>
            <span>{props.description}</span>
        </div>
        <div className={s.addInfo}>
            <span>Published at: {props.publishedAt}</span>
            <span>Updated at: {props.updatedAt}</span>
        </div>
    </div>
}

export default ArticlePage;