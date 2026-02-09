export interface Question {
  id: string;
  code: string;      
  kLevel:string ; 
  text: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}


export interface Chapter {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export interface QuizState {
  answers: (number | null)[];
  isSubmitted: boolean;
  score: number;
}

export type ViewState =
  | 'HOME'
  | 'CHAPTERS'
  | 'CHAPTER_OPTIONS'
  | 'QUIZ'
  | 'RESULTS';


export interface AIConfig {
  isLoading: boolean;
  error: string | null;
}
