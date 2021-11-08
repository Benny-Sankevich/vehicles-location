export interface ILocation {
  lat: number;
  lng: number;
}
export interface IMarkerOptions {
  position: ILocation;
  label: string;
  title: string;
}
export interface IVehicleLocationTitle{
  title: string
}

export interface RouteMetaInterface {
  resolve(): Promise<any>
}