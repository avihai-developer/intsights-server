import * as express from 'express';
import Risk from "./risk.interface";
import data from "./data";

export default class RiskController {
    public path = '/risk';
    public router = express.Router();

    private risks: Risk[] = [];

    constructor() {
        this.setRisks();
        this.initializeRoutes();
    }

    public initializeRoutes() {
        this.router.get(this.path + '/getList', this.getList)
    }

    private setRisks(): void {
        for (let i = 0; i < data.length; i++) {
            this.risks.push({
                date: new Date(data[i].date),
                type: data[i].type,
                networkType: data[i].networkType,
                severity: data[i].severity,
                sourceType: data[i].sourceType
            })
        }
        this.risks.sort(function(a,b){return b.date.getTime() - a.date.getTime()});
    }

    getRisks(): Risk[] {
        return this.risks;
    }

    getList = (request: express.Request, response: express.Response) => {
        const amount = +request.query.amount;
        if (!amount) {
            response.statusCode = 400;
            return response.send('Invalid amount');
        } else {
            return response.send(this.risks.slice(0, amount));
        }
    }
}
