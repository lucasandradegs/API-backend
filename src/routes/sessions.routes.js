const { Router } = require("express")

const SessionsController = require("../controller/SessionsController")
const sesionsController = new SessionsController;

const sessionsRoutes = Router();

sessionsRoutes.post("/", sesionsController.create)

module.exports = sessionsRoutes;