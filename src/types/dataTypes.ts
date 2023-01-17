export interface IDay {
  dayId: string;
  mood: string;
  isCompleted: boolean;
  date: Date | string;
  texts: string[];
  images: string[];
  todos: string[];
  authorId: number | string
  dayCount: number 
}

export interface ITodo {
  text: string;
  completionState: number | null;
  link: string;
  description: string | null;
}

export interface IImage {
  imageUrl: string;
  title: string | null;
  text: string | null;
}

export interface IText {
  title: string | null;
  text: string;
}
