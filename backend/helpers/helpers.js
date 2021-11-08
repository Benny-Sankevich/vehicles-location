//Change Error if environment is production
function getError(err) {
    if (process.env.NODE_ENV === "production") {
        return "Some error occurred, please try again.";
    }
    return err.message;
}

function  vehicleAdapter(vehicle) {
    return {
        position: vehicle.location,
        label: vehicle.class.name,
        title: vehicle.id,
    }
}

function calculateTriangleCoords(points, triangleCoords) {
    const arr = [];
    for (const point of points) {
        const {lat:latitude} = point.location;
        const {lng:longitude} = point.location;

        let inside = false;
        for (let i = 0, j = triangleCoords.length - 1; i < triangleCoords.length; j = i++) {
            const latitudeIndex = triangleCoords[i].lat;
            const longitudeIndex = triangleCoords[i].lng;
            const latitudeJndex = triangleCoords[j].lat
            const longitudeJndex = triangleCoords[j].lng;

            const intersect =
                longitudeIndex > longitude != longitudeJndex > longitude && latitude < ((latitudeJndex - latitudeIndex) * (longitude - longitudeIndex)) / (longitudeJndex - longitudeIndex) + latitudeIndex;
            if (intersect) inside = !inside;
        }
        if (inside) {
            arr.push(point);
        }
    }
    return arr;
}

module.exports = {
    getError,
    vehicleAdapter,
    calculateTriangleCoords
};