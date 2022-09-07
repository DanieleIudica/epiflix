import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "better-react-carousel";
import Error from "./Error";
import Loading from "./Loading";
import { Link } from "react-router-dom";
// import SingleMovie from "./SingleMovie";

const Gallery = (props) => {
  // state = {
  //   Movies: null,
  //   loading: true,
  //   error: false,
  // };
  const [movies, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // componentDidMount() {
  //   this.fetchMovies();
  // }
  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMovies = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=3bcbf89e&s=" + props.search);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        // this.setState({ Movies: data, loading: false, error: false });
        setMovie(data);
        setLoading(false);
        setError(false);
      } else {
        alert("something went wrong");
        // this.setState({ loading: false, error: true });
        setLoading(false);
        setError(true);
      }
    } catch (error) {
      console.log(error);
      // this.setState({ loading: false, error: true });
      setLoading(false);
      setError(true);
    }
  };

  return (
    <Container className="mb-5">
      {loading && <Loading />}
      {error && <Error />}

      <h4 className="text-left">{props.title}</h4>
      <Carousel cols={6} rows={1} gap={10} loop>
        {movies &&
          movies.Search.map((movie) => (
            <Carousel.Item key={movie.imdbID}>
              <Link to={"/moviedetails/" + movie.imdbID}>
                <img className="h-100 poster" width="100%" src={movie.Poster} alt="" />
              </Link>
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  );
};

export default Gallery;
//   <SingleMovie key={movie.imdbID} movie={movie.Poster} />
