import {Genre} from "./genre";
import {Author} from "./author";

export interface Book {
  id:number;
  name:string;
  genre:Genre;
  authors:Author[];
}
