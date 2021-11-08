const express = require("express");
const vehiclesLocationLogic = require("../business-logic-layer/vehicles-location-logic");
const helpers = require("../helpers/helpers");

const router = express.Router();

//Get all vehicles location:
router.post("/get-vehicles-location", async (request, response) => {
    try {
        const vehiclesLocation = await vehiclesLocationLogic.getAllVehiclesLocationAsync();
        response.json(vehiclesLocation);
    }
    catch (err) {
        response.status(500).send(helpers.getError(err));
    }
});

//Get all vehicles id by user drawing:
router.post("/get-vehicles-data-by-user-drawing", async (request, response) => {
    try {
        const triangleCoords = request.body;
        if (!(Array.isArray(triangleCoords))) {
            response.status(400).send('The data sent is invalid');
            return;
        }
        const vehiclesInsideDrawing = await vehiclesLocationLogic.getVehiclesLocationByUserDrawingAsync(triangleCoords);
        response.json(vehiclesInsideDrawing);
    }
    catch (err) {
        response.status(500).send(helpers.getError(err));
    }
});

module.exports = router;