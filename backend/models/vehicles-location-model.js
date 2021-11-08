const mongoose = require("mongoose");

// Vehicles location model
const VehiclesLocationSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, "Missing id."],
    },
    state: {
        type: String,
        required: [true, "Missing state."],
    },
    routeCommitId: {
        type: String,
        required: [true, "Missing routeCommitId."],
    },
    seats: {
        type: Number,
        required: [true, "Missing seats."],
    },
    class: {
        type: Object,
        required: [true, "Missing class."],
    },
    location: {
        type: Object,
        required: [true, "Missing location."],
    },
    distance: {
        type: Number,
        required: [true, "Missing distance."],
    }
},
    {
        versionKey: false,
        id: false
    });

//Creating translation model
const VehiclesLocationModel = mongoose.model("VehiclesLocationModel", VehiclesLocationSchema, "VehiclesLocation");

module.exports = VehiclesLocationModel;