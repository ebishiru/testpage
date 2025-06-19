import { cardData } from "../Data/cardData"

const OeuvresEmotionCard = () => {

    return (
        <div className="oeuvres-emotion-card-container">
            {
                cardData.map((data) => {
                    return (
                        <div className="oeuvres-emotion-card">
                            <div className="oeuvres-emotion-card-img-container">
                                <img src={data.imgSrc} alt={data.category} />
                                <span>{data.category}</span>
                            </div>
                            <h3>{data.title}</h3>
                            <p>{data.content}</p>
                            <p className="quote">{data.quote}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default OeuvresEmotionCard;