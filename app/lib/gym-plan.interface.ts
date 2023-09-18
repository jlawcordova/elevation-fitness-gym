export default interface GymPlan {
  id: string;
  name: string;
  description: string;
  rate: number;
  subscription?: "daily" | "monthly";
  features: string[];
  isPopular?: boolean;
}
