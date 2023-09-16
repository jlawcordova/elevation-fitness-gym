export default interface GymPlan {
  name: string;
  description: string;
  rate: number;
  features: string[];
  isPopular?: boolean;
}
