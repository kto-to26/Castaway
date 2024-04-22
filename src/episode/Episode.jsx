import "./Episode.scss";


function Episode(props) {
    const { data } = props;

    return (
        <div className="episode">
          <div className="episode__content">
          <img className="episode__content__right" src={data.img} alt={data.num} />
            <div className="episode__content__left">
                <p className="episode__content__left-type">{data.type}</p>
                <p className="episode__content__left-num">{data.num}</p>
                <h1 className="episode__content__left-name">{data.name}</h1>
                <p className="episode__content__left-main">{data.main}</p>
                <a href="#" className="episode__content__left-view">View Episode Details</a>
          </div>
            </div>
        </div>
    );
}

export default Episode;
