import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentItem } from '../models/commentService';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http : HttpClient) { }


  getComment():Observable<CommentItem[]>  {

    return this.http.get<CommentItem[]>("https://jsonplaceholder.typicode.com/comments")

  }











}
