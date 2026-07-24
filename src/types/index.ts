// Biomarkers
export interface Biomarker {
  id: string;
  name: string;
  unit: string;
  normal: string;
  critical: string;
  category: 'inflammatory' | 'infection' | 'barrier' | 'immune' | 'metabolism';
}

// TISCPA Cascade
export interface TISCPAStep {
  step: number;
  title: string;
  description: string;
  molecules: string[];
  color: string;
}

// Clinical Scale
export interface ClinicalScale {
  id: string;
  name: string;
  description: string;
  parameters: ScaleParameter[];
  interpretation: string;
}

export interface ScaleParameter {
  name: string;
  value: number;
  weight: number;
}

// Chat Response
export interface ChatResponse {
  id: string;
  topic: string;
  questions: string[];
  answer: string;
}

// Pro Status
export interface ProStatus {
  isPro: boolean;
  expiresAt?: Date;
}
