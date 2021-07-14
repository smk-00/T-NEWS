import { useParams } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Caro from "./components/caro";
import useFetch from "./useFetch";

const Headlines = () => {
  const { field } = useParams();
  const {
    data: field_headlines,
    ispending,
    error,
  } = useFetch(`/api/headlines/${field}`);
  return (
    <div className="headlines">
      <div className="headlines-caro">
        {!ispending && !error && (
          <Caro data={field_headlines.articles} fields={null} field={field} />
        )}
      </div>

      {!ispending && !error && (
        <div className="headlines-content">
          <div className="headlines-articles">
            <ArticleList articles={field_headlines.articles} field={field} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Headlines;
