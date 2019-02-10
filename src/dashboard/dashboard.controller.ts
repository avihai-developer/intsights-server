import * as express from 'express';
import Dashboard from "./interdaces/dashboard.interface";
import {WebStatisticsCardType} from "./enums/web-statistics-card-type.enum";
import RiskController from "../risk/risk.controller";
import Risk from "../risk/risk.interface";

export default class DashboardController {
    private riskController: RiskController;

    public path = '/dashboard';
    public router = express.Router();

    constructor() {
        this.riskController = new RiskController();
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path + '/getData', this.getData)
    }

    private getData = (request: express.Request, response: express.Response) => {
        const basicData: Dashboard = DashboardController.getBasicData();
        const risks = this.riskController.getRisks();
        this.setDashboardData(basicData, risks);
        return response.send(basicData);
    };

    private static getBasicData(): Dashboard {
        return {
            riskMeter: {
                title: 'SYSTEM RISK METER',
                percentages: 0
            },
            webStatistics: {
                ClearWeb: {
                    mainCard: {
                        title: 'CLEAR WEB',
                        imageUrl: './assets/clear_web.png'
                    },
                    cards: {
                        type: {
                            title: 'TYPES',
                            type: WebStatisticsCardType.Icons,
                            items: {
                                AttackIndication: {
                                    text: 'ATTACK INDICATION',
                                    value: 0,
                                    imageUrl: './assets/attack.svg',
                                    order: 0
                                },
                                DataLeakage: {
                                    text: 'DATA LEAKAGE',
                                    value: 0,
                                    imageUrl: './assets/data_leak.svg',
                                    order: 1
                                },
                                Phishing: {
                                    text: 'PHISHING',
                                    value: 0,
                                    imageUrl: './assets/phishing.svg',
                                    order: 2
                                },
                                BrandSecurity: {
                                    text: 'BRAND SECURITY',
                                    value: 0,
                                    imageUrl: './assets/brand_security.svg',
                                    order: 3
                                },
                                ExploitableData: {
                                    text: 'EXPLOITABLE DATA',
                                    value: 0,
                                    imageUrl: './assets/exploitable_data.svg',
                                    order: 4
                                },
                                vip: {
                                    text: 'VIP',
                                    value: 0,
                                    imageUrl: './assets/vip.svg',
                                    order: 5
                                }
                            },
                            order: 0
                        },
                        severity: {
                            title: 'SEVERITIES',
                            type: WebStatisticsCardType.DonutChart,
                            items: {
                                High: {
                                    text: 'HIGH',
                                    value: 0,
                                    color: '#e52e3d',
                                    order: 0
                                },
                                Medium: {
                                    text: 'MEDIUM',
                                    value: 0,
                                    color: '#f7a800',
                                    order: 1
                                },
                                Low: {
                                    text: 'LOW',
                                    value: 0,
                                    color: '#03afd8',
                                    order: 2
                                },
                            },
                            order: 1
                        },
                        sourceType: {
                            title: 'SOURCES (%)',
                            type: WebStatisticsCardType.Meters,
                            items: {
                                ApplicationStores: {
                                    text: 'APPLICATION STORES',
                                    value: 0,
                                    order: 0
                                },
                                SocialMedia: {
                                    text: 'SOCIAL MEDIA',
                                    value: 0,
                                    order: 1
                                },
                                PasteSites: {
                                    text: 'PASTE SITES',
                                    value: 0,
                                    order: 2
                                },
                                Others: {
                                    text: 'OTHERS',
                                    value: 0,
                                    order: 3
                                }
                            },
                            total: 0,
                            order: 2
                        }
                    },
                    order: 0
                },
                DarkWeb: {
                    mainCard: {
                        title: 'DARK WEB',
                        imageUrl: './assets/dark_web.png'
                    },
                    cards: {
                        type: {
                            title: 'TYPES',
                            type: WebStatisticsCardType.Icons,
                            items: {
                                AttackIndication: {
                                    text: 'ATTACK INDICATION',
                                    value: 0,
                                    imageUrl: './assets/attack.svg',
                                    order: 0
                                },
                                DataLeakage: {
                                    text: 'DATA LEAKAGE',
                                    value: 0,
                                    imageUrl: './assets/data_leak.svg',
                                    order: 1
                                },
                                Phishing: {
                                    text: 'PHISHING',
                                    value: 0,
                                    imageUrl: './assets/phishing.svg',
                                    order: 2
                                },
                                BrandSecurity: {
                                    text: 'BRAND SECURITY',
                                    value: 0,
                                    imageUrl: './assets/brand_security.svg',
                                    order: 3
                                },
                                ExploitableData: {
                                    text: 'EXPLOITABLE DATA',
                                    value: 0,
                                    imageUrl: './assets/exploitable_data.svg',
                                    order: 4
                                },
                                vip: {
                                    text: 'VIP',
                                    value: 0,
                                    imageUrl: './assets/vip.svg',
                                    order: 5
                                }
                            },
                            order: 0
                        },
                        severity: {
                            title: 'SEVERITIES',
                            type: WebStatisticsCardType.DonutChart,
                            items: {
                                High: {
                                    text: 'HIGH',
                                    value: 0,
                                    color: '#e52e3d',
                                    order: 0
                                },
                                Medium: {
                                    text: 'MEDIUM',
                                    value: 0,
                                    color: '#f7a800',
                                    order: 1
                                },
                                Low: {
                                    text: 'LOW',
                                    value: 0,
                                    color: '#03afd8',
                                    order: 2
                                },
                            },
                            order: 1
                        },
                        sourceType: {
                            title: 'SOURCES (%)',
                            type: WebStatisticsCardType.Meters,
                            items: {
                                BlackMarkets: {
                                    text: 'BLACK MARKETS',
                                    value: 0,
                                    order: 0
                                },
                                HackingForums: {
                                    text: 'HACKING FORUMS',
                                    value: 0,
                                    order: 1
                                },
                                PasteSites: {
                                    text: 'PASTE SITES',
                                    value: 0,
                                    order: 2
                                },
                                Others: {
                                    text: 'OTHERS',
                                    value: 0,
                                    order: 3
                                }
                            },
                            total: 0,
                            order: 2
                        }
                    },
                    order: 1
                }
            }
        };
    }

    private setDashboardData = (basicData: Dashboard, risks: Risk[]): Dashboard => {
        let totalSeverityRisk = 0;
        let totalTypeRisk = 0;
        if (risks && risks.length) {
            for (let i = 0; i < risks.length; i++) {
                const risk = risks[i];
                if (i < 300) {
                    totalSeverityRisk = totalSeverityRisk + this.getSeverityRisk(risk);
                    totalTypeRisk = totalTypeRisk + this.getTypeRisk(risk);
                }
                /** Set type */
                basicData.webStatistics[risk.networkType].cards['type'].items[risk.type].value++;
                /** Set severity */
                basicData.webStatistics[risk.networkType].cards['severity'].items[risk.severity].value++;
                /** Set sourceType */
                if (basicData.webStatistics[risk.networkType].cards['sourceType'].items[risk.sourceType]) {
                    basicData.webStatistics[risk.networkType].cards['sourceType'].items[risk.sourceType].value++;
                } else {
                    basicData.webStatistics[risk.networkType].cards['sourceType'].items['Others'].value++;
                }
                basicData.webStatistics[risk.networkType].cards['sourceType'].total++;
            }
            this.convertSourceTypeToPercentages(basicData);
            basicData.riskMeter.percentages = Math.round(((totalSeverityRisk / risks.length) + (totalTypeRisk / risks.length)) / 2);
        }
        return basicData;
    };

    private convertSourceTypeToPercentages = (dashboardData: Dashboard): void => {
        for (const key in dashboardData.webStatistics) {
            if (dashboardData.webStatistics.hasOwnProperty(key)) {
                const sourceType = dashboardData.webStatistics[key].cards['sourceType'].items;
                for (const type in sourceType) {
                    if (sourceType.hasOwnProperty(type)) {
                        sourceType[type].value = Math.round(
                            sourceType[type].value
                            *
                            100
                            /
                            dashboardData.webStatistics[key].cards['sourceType'].total
                        );
                    }
                }
                delete dashboardData.webStatistics[key].cards['sourceType'].total;
            }
        }
    };

    private getSeverityRisk = (risk: Risk): number => {
        switch (risk.severity) {
            case 'High':
                return 100;
            case 'Medium':
                return 70;
            case 'Low':
                return 40;
            default:
                return 0;
        }
    };

    private getTypeRisk = (risk: Risk): number => {
        switch (risk.type) {
            case 'AttackIndication':
                return 80;
            case 'DataLeakage':
                return 20;
            case 'Phishing':
                return 10;
            case 'BrandSecurity':
                return 40;
            case 'ExploitableData':
                return 60;
            case 'vip':
                return 100;
            default:
        }
    };
}
