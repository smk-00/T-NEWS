import Caro from "./components/caro";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const { data: all_headlines, ispending, error } = useFetch("/headlines/all");

  return (
    <div className="home">
      {!ispending && <div>{error}</div>}
      <div className="home-caro">
        {!ispending && !error && (
          <Caro
            data={all_headlines}
            fields={[
              "business",
              "entertainment",
              "general",
              "health",
              "science",
              "sports",
              "technology",
            ]}
          />
        )}
      </div>
      {!ispending && !error && (
        <div className="categories">
          <h2>TOPICS</h2>
          <div className="topics-list">
            <div className="row">
              <div className="column col-md-3 col-6">
                <Link to="/topics/crypto">Crypto</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/Tamilnadu">Tamilnadu</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/india">India</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/programming">Programming</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/ArtificialIntelligence">AI</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/DataScience">Data Science</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/Education">Education</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/DeepLearning">Deep Learning</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/MachineLearning">Machine Learning</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/VideoGames">Video Games</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/theni">Theni</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/NSE">NSE India</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/google">Google</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/Environment">Environment</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/pollution">Pollution</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/ElonMusk">Elon musk</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/jobs">Jobs</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/microsoft">Microsoft</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/Facebook">Facebook</Link>
              </div>
              <div className="column col-md-3 col-6">
                <Link to="/topics/isro">ISRO</Link>
              </div>
              <div className="column col-md-6 col-6">
                <Link to="/topics/space">Space</Link>
              </div>
              <div className="column col-md-6 col-6">
                <Link to="/topics/Automobile">Automobile</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
