import type { ProgressReport } from "./interfacesBook";

export interface DiaryProps {
    progress?: ProgressReport[];
    totalPages: number;
    bookId: string; 
  }
  

 export interface StatisticsProps{
    totalPages: number; 
    progress?: ProgressReport[];
}