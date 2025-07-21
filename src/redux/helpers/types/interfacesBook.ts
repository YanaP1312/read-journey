export interface Book {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
}

export interface RecommendedBook extends Book {
  recommend: boolean;
}

export interface RecommendedBooks {
  results: RecommendedBook[];
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

export interface OwnBook extends Book {
  status: BookStatus;
  owner: string;
  progress?: ProgressReport[];
}

export type OwnBooks = OwnBook[];

export interface OwnBookInfo extends OwnBook {
  timeLeftToRead?: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export interface AddBookPayload {
  title: string;
  author: string;
  totalPages: number;
}

export interface ReadingPayload {
  id: string;
  page: number;
}

export interface paramsForRecom {
  title?: string;
  author?: string;
  page?: number;
  limit?: number;
}

export interface RecommendedBooksState extends RecommendedBooks {
  isLoading: boolean;
  error: string | null;
}

export interface OwnBooksState {
  allBooks: OwnBooks;
  filteredBooks: OwnBooks;
  currentStatus: BookStatus | undefined;
  isLoading: boolean;
  error: string | null;
}

export interface OwnBookInfoState {
  book: OwnBookInfo | null;
  isLoading: boolean;
  error: string | null;
}
