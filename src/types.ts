export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export interface StepCard {
  number: number;
  title: string;
  description: string;
}

export interface ScenarioCard {
  id: string;
  title: string;
  description: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  salonName: string;
  branchCount: number;
}

export interface MasterData {
  id: string;
  name: string;
  specialty: string;
  occupancy: number; // percentage (e.g. 45)
  revenue: string;
  reviewsCount: number;
  rating: number;
  recommendation: string;
  avatarColor: string;
}

export interface ReviewItem {
  id: string;
  clientName: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
  status: 'new' | 'processed';
  recommendation: string;
  taskTitle: string;
}
