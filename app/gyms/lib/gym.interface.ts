export default interface Gym {
  name: string;
  address: {
    line1: string;
    line2?: string;
  };
  contact?: {
    mobile?: string;
  };
  location: {
    lat: number;
    lng: number;
  };
}
