const MoviesCard = (props) => {
  return (
    <>
      <section className="movie">
        <div>
          <p>{props.Year}</p>
          <p>{props.imdbID}</p>
        </div>

        <div>
          <img
            src={
              props.Poster !== "N/A"
                ? props.Poster
                : "https://via.placeholder.com/400"
            }
            alt={props.Title}
          />
        </div>

        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
      </section>
    </>
  );
};
export default MoviesCard;
