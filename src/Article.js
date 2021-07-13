import { useParams } from "react-router-dom";
import Caro from "./components/caro";
import useFetch from "./useFetch";
import "./Article.css";

const Article = () => {
  const { field, id } = useParams();
  const {
    data: solo_article,
    ispending,
    error,
  } = useFetch(`/article/${field}/${id}`);

  return (
    <div className="solo-article">
      <div className="solo-article-caro">
        {!ispending && !error && solo_article && (
          <Caro data={[solo_article]} fields={null} field={field} />
        )}
        {!ispending && !error && !solo_article && (
          <div className="error">Sorry...!</div>
        )}
      </div>
      {!ispending && !error && solo_article && (
        <div className="solo-article-div">
          <div className="article-detail">
            <h4>{solo_article.title}</h4>
            <img src={solo_article.urlToImage} alt={solo_article.id} />
            <div className="article-link">
              <a rel="noreferrer" target="_blank" href={solo_article.url}>
                Source : {solo_article.source.name}
              </a>
              <p>Author : {solo_article.author}</p>
              <p>Date : {solo_article.publishedAt.split("T")[0]}</p>
            </div>
            <article>{solo_article.content}</article>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
