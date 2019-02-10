import {WebStatisticsCardType} from "../enums/web-statistics-card-type.enum";
import DonutContentDictionary from "./donut-content-dictionary.interface";
import IconsContentDictionary from "./icons-content-dictionary.interface";
import MetersContentDictionary from "./meters-content-dictionary.interface";

export default interface WebStatisticsCard {
    title: string;
    type: WebStatisticsCardType;
    items: DonutContentDictionary | IconsContentDictionary | MetersContentDictionary;
    total?: number;
}
