export default interface GymPlan {
  id: string;
  name: string;
  description: string;
  rate: number;
  features: string[];
  isPopular?: boolean;
}
