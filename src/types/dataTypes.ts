export interface IDay {
  mood: string;
  isCompleted: boolean;
  date: Date | string;
  texts: string[];
  images: string[];
  todos: string[];
  authorId: number | string
  dayCount: number 
  id?: string | number
  isSkipped?: boolean
}

export interface ITodo {
  text: string;
  completionState: number | null;
  link: string;
  description: string | null;
  dayId: string | number
}

export interface IImage {
  imageUrl: string;
  title: string | null;
  text: string | null;
  dayId: string | number
}

export interface IText {
  title: string | null;
  text: string;
  dayId: string | number
}
