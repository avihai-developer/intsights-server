import App from "./app";
import RiskController from "./risk/risk.controller";

const app = new App(
    [
        new RiskController(),
    ],
    5000,
);

app.listen();
