import { Component } from "react";
import { Container } from "react-bootstrap";
import Carousel from "better-react-carousel";
import Error from "./Error";
import Loading from "./Loading";

class Gallery extends Component {
  state = {
    Movies: null,
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      let response = await fetch("http://www.omdbapi.com/?apikey=3bcbf89e&s=" + this.props.search);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({ Movies: data, loading: false, error: false });
      } else {
        alert("something went wrong");
        this.setState({ loading: false, error: true });
      }
    } catch (error) {
      console.log(error);
      this.setState({ loading: false, error: true });
    }
  };

  render() {
    return (
      <Container className="mb-5">
        {this.state.loading && <Loading />}
        {this.state.error && <Error />}

        <h4 className="text-left">{this.props.title}</h4>
        <Carousel cols={6} rows={1} gap={10} loop>
          {this.state.Movies &&
            this.state.Movies.Search.map((movie) => (
              <Carousel.Item key={movie.imdbID}>
                <img className="h-100 poster" width="100%" src={movie.Poster} alt="" />
              </Carousel.Item>
            ))}
        </Carousel>
      </Container>
    );
  }
}

export default Gallery;
