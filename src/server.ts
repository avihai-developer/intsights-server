import App from "./app";
import RiskController from "./risk/risk.controller";

const app = new App(
    [
        new RiskController(),
    ],
    80,
);

app.listen();
