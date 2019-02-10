import RiskMeter from "./risk-meter.interface";
import WebStatisticsDictionary from "./web-statistics-dictionary.interface";

export default interface Dashboard {
    riskMeter: RiskMeter;
    webStatistics: WebStatisticsDictionary;
}
