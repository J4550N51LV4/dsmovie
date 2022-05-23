import MovieScore from 'components/MovieScore'
import './styles.css';
import { Link } from "react-router-dom";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    }
/*      

                                        https://www.themoviedb.org/


    const movie = {
        id: 2,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/9Ngw106BLlNJ4iVpRHlrDfaLpCV.jpg",
        title: "Moonfall - Ameaça Lunar",
        count: 2,
        score: 4.5
    }

    const movie = {
        id: 3,
        image: "https://www.themoviedb.org/t/p/w250_and_h141_face/9ijMGlJKqcslswWUzTEwScm82Gs.jpg",
        title: "The Mandalorian",
        count: 2,
        score: 4.5
    }
    
    const movie = {
        id: 3,
        image: "https://www.themoviedb.org/t/p/w250_and_h141_face/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
        title: "The Boys",
        count: 2,
        score: 4.5
    }
    
    const movie = {
        id: 3,
        image: "https://www.themoviedb.org/t/p/w250_and_h141_face/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
        title: "The Boys",
        count: 2,
        score: 4.5
    }

    const movie = {
        id: 4,
        image: "https://www.themoviedb.org/t/p/w250_and_h141_face/oKxrDdG0SfmWRtJYmreK4rjDMUo.jpg",
        title: "See",
        count: 2,
        score: 4.5
    }

    const movie = {
        id: 5,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/A3bsT0m1um6tvcmlIGxBwx9eAxn.jpg",
        title: "Cidade Perdida",
        count: 2,
        score: 4.5
    }

    const movie = {
        id: 6,
        image: "https://www.themoviedb.org/t/p/w250_and_h141_face/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
        title: "Animais Fantásticos: Os Segredos de Dumbledore",
        count: 2,
        score: 4.5
    }

    const movie = {
        id: 7,
        image: "https://www.themoviedb.org/t/p/w250_and_h141_face/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
        title: "Morbius",
        count: 2,
        score: 4.5
    }

    const movie = {
        id: 8,
        image: "https://www.themoviedb.org/t/p/w250_and_h141_face/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
        title: "Sonic 2: O Filme",
        count: 2,
        score: 4.5
    }

    const movie = {
        id: 9,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/cIjmEgK67974md4Z9Xe6350sAS2.jpg",
        title: "O Homem do Norte",
        count: 2,
        score: 4.5
    }

    const movie = {
        id: 10,
        image: "https://www.themoviedb.org/t/p/w250_and_h141_face/k4TpF7wl1FMPzHRJNudODAm7h0P.jpg",
        title: "O Peso do Talento",
        count: 2,
        score: 4.5
    }
*/
return(
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />

                <Link to={`/form/${movie.id}`} >
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default MovieCard;