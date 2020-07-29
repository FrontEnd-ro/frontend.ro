export interface Comment {
  id: number;
  user: string;
  comment: string;
  exerciseId?: number;
}

export interface Exercise {
  id: number;
  title: string;
  description: string;
  solution: string;
}
