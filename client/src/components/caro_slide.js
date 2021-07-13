import { Link } from "react-router-dom";

const CaroSlide = (props) => {
  var slide_data = props.data;
  var isactive = props.isactive;
  var field = props.field;

  if (isactive) {
    return (
      <div
        className="carousel-item active"
        data-interval="2000"
        data-pause="hover"
      >
        <div className="caro-slide-content">
          <div className="content">
            <h2>{slide_data.title}</h2>
            <p>{slide_data.description}</p>
            <div className="content-links">
              <Link to={`/articles/${field}/${slide_data.id}`}>read more</Link>
              <a href={slide_data.url}>Source : {slide_data.source.name}</a>
            </div>
          </div>

          <div className="content-img">
            <img src={slide_data.urlToImage} alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="carousel-item" data-interval="2000" data-pause="hover">
        <div className="caro-slide-content">
          <div className="content">
            <h2>{slide_data.title}</h2>
            <p>{slide_data.description}</p>
            <div className="content-links">
              <Link to={`/articles/${field}/${slide_data.id}`}>read more</Link>
              <a href={slide_data.url}>Source : {slide_data.source.name}</a>
            </div>
          </div>
          <div className="content-img">
            <img src={slide_data.urlToImage} alt="" />
          </div>
        </div>
      </div>
    );
  }
};

export default CaroSlide;
