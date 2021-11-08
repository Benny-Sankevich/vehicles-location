require("../data-access-layer/dal");
const VehiclesLocationModel = require("../models/vehicles-location-model");
const helpers = require("../helpers/helpers");

function getAllVehiclesLocationData() {
    return VehiclesLocationModel.find().exec();
}

//Get all appointments:
async function getAllVehiclesLocationAsync() {
    const vehiclesLocation = await getAllVehiclesLocationData();
    const markers = vehiclesLocation.map(vehicle => helpers.vehicleAdapter(vehicle));
    return markers;

}

async function getVehiclesLocationByUserDrawingAsync(triangleCoords) {
    const vehiclesLocation = await getAllVehiclesLocationData();
    const vehiclesInArea = await helpers.calculateTriangleCoords(vehiclesLocation, triangleCoords);
    const data = vehiclesInArea.map(vehicle => ({ title: vehicle.id }));
    return data;
}

module.exports = {
    getAllVehiclesLocationAsync,
    getVehiclesLocationByUserDrawingAsync
}