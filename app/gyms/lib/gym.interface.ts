export default interface Gym {
  id: string;
  name: string;
  address: {
    line1: string;
    line2?: string;
  };
  contact?: {
    mobile?: string;
    tel?: string;
  };
  location: {
    lat: number;
    lng: number;
  };
}
