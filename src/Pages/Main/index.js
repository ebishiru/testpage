import { Link } from "react-router-dom";

const Main = () => {

    return (
        <>
            <Link className="main-link" to="/oeuvresemotion">Oeuvre Emotion</Link>
            <Link className="main-link" to="/communiquerartiste">Communiquer Artiste</Link>
            <Link className="main-link" to="/galeriethematique">Galerie Thematique</Link>
        </>
    )
}

export default Main;