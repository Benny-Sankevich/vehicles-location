import { httpClient } from '../utils/http-client';

class ApiService {
  getAllVehiclesLocation() {
    return httpClient
      .post('vehicles-location/get-vehicles-location')
      .then((response) => {
        if (response.status.toString() === '200') {                    
          return response.data;
        }
      });
  }

  getVehiclesLocationByUserDrawingAsync(triangleCoords) {
    return httpClient
      .post(
        'vehicles-location/get-vehicles-data-by-user-drawing',
        triangleCoords
      )
      .then((response) => {
        if (response.status.toString() === '200') {
          return response.data;
        }
      });
  }
}
export const apiService = new ApiService();
