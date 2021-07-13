import { Link } from "react-router-dom";
import "./styles/articlelist.css";
const ArticleList = (props) => {
  const articles = props.articles;
  const field = props.field;
  return (
    <div className="articles">
      <h2>{field} NEWS</h2>
      {articles.map((article) => {
        return (
          <div className="article">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <div className="link">
              <Link to={`/articles/${field}/${article.id}`}>Read More</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArticleList;
