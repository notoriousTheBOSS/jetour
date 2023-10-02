import Card from "../../components/UI/Card/Card";
import { FC } from "react";

interface CardData {
    title: string;
    description: string;
    image: string;
    link: string;
    speed: number;
    id: number;
}

interface CardListProps {
    cards: CardData[];
}

const CardList: FC<CardListProps> = ({ cards }) => {
    return (
        <div>
            {cards.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    link={card.link}
                    speed={card.speed}
                    id={card.id}
                />
            ))}
        </div>
    );
};

export default CardList;
