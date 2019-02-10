import App from "./app";
import RiskController from "./risk/risk.controller";
import DashboardController from "./dashboard/dashboard.controller";

const app = new App(
    [
        new RiskController(),
        new DashboardController(),
    ],
    5000,
);

app.listen();
