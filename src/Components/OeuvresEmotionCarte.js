

const OeuvresEmotionCard = () => {

const cardData = [
    {   category: "Sérénité",
        title: "Échos du silence",
        content: "Une composition qui invite à la méditation et à l'introspection, avec des tons pastel et une structure délicate qui évoque le calme intérieur.",
        quote: `"Je me sens apaisé chaque fois que je la contemple." — Clara M.`,
        imgSrc: "https://artur.art/wp-content/uploads/2025/05/card-1-img-3.png",
    },
    {
        category: "Nostalgie",
        title: "Fragments de mémoire",
        content: "Une œuvre qui capture la douce mélancolie des souvenirs d'enfance, avec des teintes légèrement délavées évoquant le passage du temps.",
        quote: `"Elle me rappelle les étés chez ma grand-mère." — Thomas R.`,
        imgSrc: "https://artur.art/wp-content/uploads/2025/05/card-1-img-2.png",
    },
    {
        category: "Espoir",
        title: "Aurore intérieure",
        content: "Une création lumineuse qui symbolise le renouveau et l'espoir, avec des touches de lumière émergeant doucement de l'obscurité.",
        quote: `"Elle m'a accompagnée pendant ma convalescence." — Sophie D.`,
        imgSrc: "https://artur.art/wp-content/uploads/2025/05/card-1-img-1.png",
    }
]

    return (
        <div className="oeuvres-emotion-card-container">
            {
                cardData.map((data) => {
                    return (
                        <div className="oeuvres-emotion-card">
                            <img src={data.imgSrc} alt={data.category} />
                            <span>{data.category}</span>
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