import WebStatisticsCardDictionary from "./web-statistics-card-dictionary.interface";

export default interface WebStatistics {
    mainCard: {
        title: string;
        imageUrl: string;
    };
    cards: WebStatisticsCardDictionary;
}
