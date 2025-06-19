
import OeuvresEmotionCard from "../../Components/OeuvresEmotionCarte";

const OeuvresEmotion = () => {

    return (
        <>
            <div className="oeuvres-emotion-page">
                <h2>Des créations qui éveillent vos sentiments</h2>
                <p>Chaque œuvre est soigneusement sélectionnée pour son potentiel à créer une résonance émotionnelle profonde. Nous privilégions les tons doux, les compositions évocatrices et les histoires personnelles.</p>
                <OeuvresEmotionCard />
                <div className="oeuvres-emotion-button-container">
                    <button>Explorer toutes les oeuvres</button>
                </div>
                
            </div>
        </>
    )
}

export default OeuvresEmotion;