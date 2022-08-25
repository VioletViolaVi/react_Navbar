const MoviesCard = ({movie1}) => {
  return (
    <>
      <section className="movie">
        <div>
          <p>{movie1.Year}</p>
          <p>{movie1.imdbID}</p>
        </div>

        <div>
          <img
            src={
              movie1.Poster !== "N/A"
                ? movie1.Poster
                : "https://via.placeholder.com/400"
            }
            alt={movie1.Title}
          />
        </div>

        <div>
          <span>{movie1.Type}</span>
          <h3>{movie1.Title}</h3>
        </div>
      </section>
    </>
  );
};

export default MoviesCard;
