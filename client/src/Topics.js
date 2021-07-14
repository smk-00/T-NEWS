import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Caro from "./components/caro";
import ArticleList from "./components/ArticleList";

const Topics = () => {
  const { query } = useParams();
  const {
    data: topic_articles,
    ispending,
    error,
  } = useFetch(`/api/everything/${query}`);
  return (
    <div className="topic">
      <div className="topic-caro">
        {!ispending && !error && (
          <Caro data={topic_articles.articles} fields={null} field={query} />
        )}
      </div>
      <div className="topic-content">
        <div className="headlines-articles">
          {!ispending && !error && (
            <ArticleList articles={topic_articles.articles} field={query} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Topics;
