import CaroSlide from "./caro_slide";

import "./styles/caro.css";
const Caro = (props) => {
  const datas = props.data;
  const FIELDS = props.fields;
  const field = props.field;
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        {FIELDS &&
          FIELDS.map((field, index) => {
            var field_data = datas[field];
            if (index !== 0) {
              return (
                <CaroSlide data={field_data} field={field} isactive={false} />
              );
            } else {
              return (
                <CaroSlide data={field_data} field={field} isactive={true} />
              );
            }
          })}

        {!FIELDS &&
          datas.map((data, index) => {
            if (index !== 0) {
              return <CaroSlide data={data} isactive={false} field={field} />;
            } else {
              return <CaroSlide data={data} isactive={true} field={field} />;
            }
          })}
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Caro;
