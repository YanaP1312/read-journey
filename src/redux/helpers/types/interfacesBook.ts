export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
}

export interface RecommendedBookItem extends Book {
  recommend: boolean;
}

export interface RecommendedBook {
  results: RecommendedBookItem[];
  totalPages: number;
  page: number;
  perPage: number;
}

export type BookStatus = "unread" | "in-progress" | "done";
export type ProgressStatus = "active" | "inactive";

export interface ProgressReport {
  startPage: number;
  startReading: string;
  finishPage?: number;
  finishReading?: string;
  speed?: number;
  status: ProgressStatus;
}

export interface OwnBookItem extends Book {
  status: BookStatus;
  owner: string;
  progress?: ProgressReport[];
}

export type OwnBook = OwnBookItem[];

export interface OwnBookInfo extends OwnBookItem {
  timeLeftToRead: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface AddBookPayload {
  title: string;
  author: string;
  totalPage: number;
}

export interface ReadingPayload {
  id: string;
  page: number;
}
